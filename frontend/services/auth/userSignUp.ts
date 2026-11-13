import UserPool from "./userPool";

import { ISignUpResult, CognitoUserAttribute } from 'amazon-cognito-identity-js';

interface User {
    email: string;
    password: string;
    name: string;
    familyName: string;
}

const signUp = async (props: User) => {
    return new Promise((resolve, reject) => {
        const attributeList = []
        const name = new CognitoUserAttribute({ Name: 'name', Value: props.name })
        const familyName = new CognitoUserAttribute({ Name: 'family_name', Value: props.familyName })

        attributeList.push(name, familyName)

        UserPool.signUp(props.email, props.password, attributeList, [], (err: any, data: ISignUpResult|undefined) => {
            if (err) {
                
                console.log(err);
                reject(err);
                return;
            } else {
                resolve(data);
            }
            
        });
    });
};

export default signUp;