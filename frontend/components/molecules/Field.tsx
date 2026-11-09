import styles from "./Field.module.css";

type FieldProps = {
  label: string;
  name: string;
  type: "text" | "email";
  autoComplete: string;
};

export default function Field({ label, name, type, autoComplete }: FieldProps) {
  const id = `contact-${name}`;
  return (
    <label className={styles.field} htmlFor={id}>
      <span>{label}</span>
      <input id={id} name={name} type={type} autoComplete={autoComplete} required />
    </label>
  );
}
