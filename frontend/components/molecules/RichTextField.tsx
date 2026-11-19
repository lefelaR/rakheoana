import { useEffect, useId, useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { LuBold, LuItalic, LuLink, LuList, LuListOrdered, LuUnderline } from "react-icons/lu";
import Icon from "@components/atoms/Icon";
import styles from "./RichTextField.module.css";

type RichTextFieldProps = {
  label: string;
  value: string;
  onChange: (html: string) => void;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
};

const RichTextField = ({
  label,
  value,
  onChange,
  disabled,
  error,
  placeholder = "Write here",
}: RichTextFieldProps) => {
  const errorId = useId();
  const labelId = useId();
  const emitted = useRef(value);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    editable: !disabled,
    extensions: [
      StarterKit.configure({
        heading: false,
        code: false,
        codeBlock: false,
        blockquote: false,
        horizontalRule: false,
        strike: false,
        link: {
          openOnClick: false,
          autolink: true,
          defaultProtocol: "https",
          HTMLAttributes: {
            rel: "noopener noreferrer",
            target: "_blank",
          },
          isAllowedUri: (url: string) => /^(https?:|mailto:)/i.test(url),
        },
      }),
      Placeholder.configure({ placeholder }),
    ],
    content: value,
    editorProps: {
      attributes: {
        "aria-labelledby": labelId,
        "aria-multiline": "true",
        role: "textbox",
      },
    },
    onUpdate: ({ editor: current }) => {
      const html = current.getHTML();
      emitted.current = html;
      onChangeRef.current(html);
    },
  });

  useEffect(() => {
    if (!editor) {
      return;
    }
    editor.setEditable(!disabled);
  }, [disabled, editor]);

  useEffect(() => {
    if (!editor || value === emitted.current) {
      return;
    }
    editor.commands.setContent(value, { emitUpdate: false });
    emitted.current = value;
  }, [editor, value]);

  useEffect(() => {
    if (!editor) {
      return;
    }
    editor.setOptions({
      editorProps: {
        attributes: {
          "aria-labelledby": labelId,
          "aria-multiline": "true",
          role: "textbox",
          ...(error ? { "aria-invalid": "true", "aria-describedby": errorId } : {}),
        },
      },
    });
  }, [editor, error, errorId, labelId]);

  const setLink = () => {
    if (!editor) {
      return;
    }
    const previous = editor.getAttributes("link").href as string | undefined;
    const next = window.prompt("Link URL", previous ?? "https://");
    if (next === null) {
      return;
    }
    const href = next.trim();
    if (href === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    if (!/^(https?:|mailto:)/i.test(href)) {
      window.alert("Use an http, https, or mailto link.");
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href }).run();
  };

  const tools = [
    {
      label: "Bold",
      icon: LuBold,
      active: editor?.isActive("bold") ?? false,
      run: () => editor?.chain().focus().toggleBold().run(),
    },
    {
      label: "Italic",
      icon: LuItalic,
      active: editor?.isActive("italic") ?? false,
      run: () => editor?.chain().focus().toggleItalic().run(),
    },
    {
      label: "Underline",
      icon: LuUnderline,
      active: editor?.isActive("underline") ?? false,
      run: () => editor?.chain().focus().toggleUnderline().run(),
    },
    {
      label: "Bullet list",
      icon: LuList,
      active: editor?.isActive("bulletList") ?? false,
      run: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Numbered list",
      icon: LuListOrdered,
      active: editor?.isActive("orderedList") ?? false,
      run: () => editor?.chain().focus().toggleOrderedList().run(),
    },
    {
      label: "Link",
      icon: LuLink,
      active: editor?.isActive("link") ?? false,
      run: setLink,
    },
  ];

  return (
    <div className={styles.field}>
      <span className={styles.label} id={labelId}>
        {label}
      </span>
      <div className={`${styles.shell} ${disabled ? styles.disabled : ""}`}>
        <div className={styles.toolbar} role="toolbar" aria-label={`${label} formatting`}>
          {tools.map((tool) => (
            <button
              key={tool.label}
              type="button"
              className={`${styles.tool} ${tool.active ? styles.toolOn : ""}`}
              aria-pressed={tool.active}
              aria-label={tool.label}
              disabled={!editor || disabled}
              onMouseDown={(event) => event.preventDefault()}
              onClick={tool.run}
            >
              <Icon icon={tool.icon} aria-hidden="true" />
            </button>
          ))}
        </div>
        <EditorContent editor={editor} className={styles.surface} />
      </div>
      {error ? (
        <p className={styles.error} id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default RichTextField;
