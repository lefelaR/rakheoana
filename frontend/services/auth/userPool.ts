import { CognitoUserPool, ICognitoUserPoolData } from 'amazon-cognito-identity-js';
import { cognitoClientId, cognitoUserPoolId } from './cognitoAuthConfig';

const poolData: ICognitoUserPoolData = {
  UserPoolId: cognitoUserPoolId,
  ClientId: cognitoClientId,
};

const UserPool = new CognitoUserPool(poolData);

export default UserPool