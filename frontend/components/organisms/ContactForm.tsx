import Button from "@components/atoms/Button";
import Field from "@components/molecules/Field";
import TextAreaField from "@components/molecules/TextAreaField";
import type { ContactMessage } from "@models/profile";
import styles from "./ContactForm.module.css";

type ContactFormProps = {
  pending: boolean;
  notice: string;
  onSubmit: (message: ContactMessage) => void;
};

export default function ContactForm({ pending, notice, onSubmit }: ContactFormProps) {
  return (
    <form
      className={styles.form}
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        onSubmit({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
        });
      }}
    >
      <Field label="Name" name="name" type="text" autoComplete="name" />
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <TextAreaField label="Message" name="message" />
      <Button disabled={pending}>{pending ? "Sending" : "Send"}</Button>
      <p className={styles.notice} role="status">
        {notice}
      </p>
    </form>
  );
}
