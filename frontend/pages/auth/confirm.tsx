import { useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import ConfirmCodeTemplate from "components/templates/ConfirmCodeTemplate";
import {
  confirmSignUp,
  resendConfirmationCode,
} from "services/auth/confirmSignUp";

const Confirm = () => {
  const router = useRouter();
  const email = typeof router.query.email === "string" ? router.query.email : "";
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (code: string) => {
    if (!email) {
      toast.error("Go back to sign up and register again.");
      return;
    }

    setSubmitting(true);
    confirmSignUp(email, code)
      .then(() => {
        toast.success("Email confirmed");
        router.push("/auth/signin");
      })
      .catch((err: { message?: string }) => {
        toast.error(err.message || "Could not confirm the code");
        setSubmitting(false);
      });
  };

  const handleResend = () => {
    if (!email) {
      toast.error("Go back to sign up and register again.");
      return;
    }

    resendConfirmationCode(email)
      .then(() => {
        toast.success("A new code was sent");
      })
      .catch((err: { message?: string }) => {
        toast.error(err.message || "Could not resend the code");
      });
  };

  return (
    <>
      <Toaster position="bottom-left" />
      <ConfirmCodeTemplate
        email={email}
        submitting={submitting}
        onSubmit={handleSubmit}
        onResend={handleResend}
      />
    </>
  );
};

export default Confirm;
