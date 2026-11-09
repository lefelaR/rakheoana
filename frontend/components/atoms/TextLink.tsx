import styles from "./TextLink.module.css";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  current?: boolean;
  target?: "_blank";
  className?: string;
};

export default function TextLink({ href, children, current, target, className }: TextLinkProps) {
  const classes = className ? `${styles.link} ${className}` : styles.link;
  return (
    <a
      className={classes}
      href={href}
      aria-current={current ? "page" : undefined}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
