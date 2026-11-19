import { useState } from "react";
import { Field } from "formik";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Icon from "@components/atoms/Icon";
import styles from "./PasswordField.module.css";

type PasswordFieldProps = {
  name: string;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
};

const PasswordField = ({
  name,
  placeholder,
  className,
  autoComplete = "current-password",
}: PasswordFieldProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.wrap}>
      <Field
        name={name}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        className={className}
        autoComplete={autoComplete}
      />
      <button
        type="button"
        className={styles.toggle}
        aria-label={visible ? "Hide password" : "Show password"}
        aria-pressed={visible}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => setVisible((current) => !current)}
      >
        <Icon icon={visible ? LuEyeOff : LuEye} size={20} aria-hidden />
      </button>
    </div>
  );
};

export default PasswordField;
