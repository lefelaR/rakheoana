import styles from "./Field.module.css";

type TextAreaFieldProps = {
  label: string;
  name: string;
};

export default function TextAreaField({ label, name }: TextAreaFieldProps) {
  const id = `contact-${name}`;
  return (
    <label className={styles.field} htmlFor={id}>
      <span>{label}</span>
      <textarea id={id} name={name} rows={6} required />
    </label>
  );
}
