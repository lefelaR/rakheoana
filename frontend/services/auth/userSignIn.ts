// import { Password } from '@mui/icons-material';
import { CognitoUser, ICognitoUserPoolData, AuthenticationDetails } from 'amazon-cognito-identity-js';
import logger from "@services/logService";
import UserPool from './userPool'



interface User {
    email: string,
    password: string,
}


const signUp = (props: User) => {

    const user = new CognitoUser({
        Username: props.email,
        Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
        Username: props.email,
        Password: props.password
    });

    return new Promise((resolve, reject) => {

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                resolve(data)
            },
            onFailure: err => {
                logger.log(err)
                reject(err)
            },
        })
    })

}


export default signUp