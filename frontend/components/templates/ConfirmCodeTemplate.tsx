import Link from "next/link";
import ConfirmCodeForm from "components/organisms/ConfirmCodeForm";

type ConfirmCodeTemplateProps = {
  email: string;
  submitting: boolean;
  onSubmit: (code: string) => void;
  onResend: () => void;
};

const ConfirmCodeTemplate = ({
  email,
  submitting,
  onSubmit,
  onResend,
}: ConfirmCodeTemplateProps) => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 px-3 py-4">
      <div className="col-lg-5 col-md-8 col-12" id="auth-left">
        <div className="card shadow p-5 sm-5 bg-white rounded ">
          <div className="auth-logo"> </div>
          <p className="auth-title h2 mx-auto">Confirm your email.</p>
          <p className="auth-subtitle mb-5 mx-auto">
            {email
              ? `Enter the verification code sent to ${email}.`
              : "Enter the verification code sent to your email."}
          </p>
          <ConfirmCodeForm
            submitting={submitting}
            onSubmit={onSubmit}
            onResend={onResend}
          />
          <div className="text-center mt-5 font-weight-smaller">
            <p>
              <Link className="font-bold" href="/auth/signin">
                Log in
              </Link>
              |
              <Link className="font-bold" href="/">
                home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCodeTemplate;
