import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "./userPool";

const userFor = (email: string) =>
  new CognitoUser({
    Username: email,
    Pool: UserPool,
  });

export const confirmSignUp = (email: string, code: string) => {
  const user = userFor(email);

  return new Promise((resolve, reject) => {
    user.confirmRegistration(code, true, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

export const resendConfirmationCode = (email: string) => {
  const user = userFor(email);

  return new Promise((resolve, reject) => {
    user.resendConfirmationCode((err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};
