const escapeText = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const escapeAttr = (value: string) => escapeText(value).replace(/"/g, "&quot;");

const decode = (value: string) =>
  value
    .replace(/&nbsp;/gi, " ")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&");

const readHref = (attrs: string) => {
  const match = attrs.match(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
  const href = decode(match?.[1] ?? match?.[2] ?? "").trim();
  if (!/^(https?:|mailto:)/i.test(href)) {
    return "";
  }
  return href;
};

/** Keep bold, italic, underline, and safe links. Everything else becomes text. */
export const sanitizeHighlight = (html: string) => {
  const tagPattern = /<\/?([a-zA-Z][a-zA-Z0-9]*)(\s[^<>]*)?\s*\/?>/g;
  let result = "";
  let last = 0;
  const open: string[] = [];

  let match: RegExpExecArray | null;
  while ((match = tagPattern.exec(html))) {
    const index = match.index;
    result += escapeText(decode(html.slice(last, index)));
    last = index + match[0].length;

    const name = match[1].toLowerCase();
    const closing = match[0].startsWith("</");
    if (name === "br") {
      continue;
    }

    if (closing) {
      const stackIndex = open.lastIndexOf(name);
      if (stackIndex === -1) {
        continue;
      }
      while (open.length > stackIndex) {
        const popped = open.pop();
        if (popped) {
          result += `</${popped}>`;
        }
      }
      continue;
    }

    const tag = name === "b" ? "strong" : name === "i" ? "em" : name;
    if (tag === "strong" || tag === "em" || tag === "u") {
      open.push(tag);
      result += `<${tag}>`;
      continue;
    }

    if (tag === "a") {
      const href = readHref(match[2] ?? "");
      if (!href) {
        continue;
      }
      open.push("a");
      result += `<a href="${escapeAttr(href)}">`;
    }
  }

  result += escapeText(decode(html.slice(last)));
  while (open.length > 0) {
    const popped = open.pop();
    if (popped) {
      result += `</${popped}>`;
    }
  }
  return result;
};

export const highlightText = (html: string) =>
  decode(sanitizeHighlight(html).replace(/<[^>]+>/g, ""))
    .replace(/\u00a0/g, " ")
    .trim();

export const highlightsToHtml = (highlights: string[]) => {
  const items = highlights.length > 0 ? highlights : [""];
  const list = items
    .map((item) => `<li><p>${sanitizeHighlight(item)}</p></li>`)
    .join("");
  return `<ul>${list}</ul>`;
};

export const htmlToHighlights = (html: string): string[] => {
  if (typeof DOMParser === "undefined") {
    const text = sanitizeHighlight(html);
    return text ? [text] : [""];
  }

  const document = new DOMParser().parseFromString(html, "text/html");
  const items = Array.from(document.body.querySelectorAll("li"));
  const blocks = items.length > 0 ? items : Array.from(document.body.querySelectorAll("p"));
  if (blocks.length === 0) {
    const text = sanitizeHighlight(document.body.innerHTML);
    return text ? [text] : [""];
  }

  return blocks.map((block) => {
    const paragraph = block.querySelector("p");
    const source = paragraph ?? block;
    return sanitizeHighlight(source.innerHTML.replace(/<br\b[^>]*>/gi, ""));
  });
};
