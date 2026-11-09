import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({ children, type = "submit", disabled }: ButtonProps) {
  return (
    <button className={styles.button} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
