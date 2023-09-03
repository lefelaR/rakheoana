import UserPool from './userPool';
import User, { AuthenticationStatus } from 'models/user.model';

const checkSession = () => {
    return new Promise((resolve, reject) => {
        const cognitoUser = UserPool.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err: any, session: any) {
                if (err) {
                    reject(err);
                }
                if (!!session && session.isValid()) {
                    cognitoUser.getUserAttributes(function (err, attributes) {
                        if (err) {
                            reject(err);
                        } else {
                            const attr = { ...attributes };
                            const user = new User();
                            user.id = attr['0'].Value;
                            user.firstName = attr['2'].Value;
                            user.lastName = attr['3'].Value;
                            user.email = attr['4'].Value;
                            user.authStatus = AuthenticationStatus.Authenticated;
                            resolve(user);
                        }
                    });
                }
            });
        } else {
            const err = { message: 'User not logged in' };
            reject(err);
        }
    });
};

export default checkSession;
