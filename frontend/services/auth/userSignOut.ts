import UserPool from "./userPool";

const userSignOut = async (): Promise<void> => {
  const user = UserPool.getCurrentUser();
  if (user) {
    user.signOut();
  }
};

export default userSignOut;