import { FormEvent, useState } from "react";

type ConfirmCodeFormProps = {
  submitting: boolean;
  onSubmit: (code: string) => void;
  onResend: () => void;
};

const ConfirmCodeForm = ({
  submitting,
  onSubmit,
  onResend,
}: ConfirmCodeFormProps) => {
  const [code, setCode] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(code.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group position-relative has-icon-left mb-4">
        <input
          name="code"
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          className="form-control form-control-xl"
          placeholder="Verification code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          required
        />
        <div className="form-control-icon">
          <i className="bi bi-shield-lock"></i>
        </div>
      </div>
      <input
        className="btn main-btn btn-primary btn-block shadow-lg mt-5"
        type="submit"
        name="submit"
        value={submitting ? "Confirming..." : "Confirm"}
        disabled={submitting}
      />
      <button
        className="btn btn-link d-block mx-auto mt-4"
        type="button"
        onClick={onResend}
        disabled={submitting}
      >
        Resend code
      </button>
    </form>
  );
};

export default ConfirmCodeForm;
