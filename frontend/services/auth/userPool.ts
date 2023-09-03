import { CognitoUserPool, ICognitoUserPoolData } from 'amazon-cognito-identity-js';

const UserPoolId = "eu-central-1_K8ySf4Gjr"
const ClientId = "2uv5sbiniei5asjeho5t6rnlh6"
const pool = { UserPoolId, ClientId }

//@ts-ignore
const poolData: ICognitoUserPoolData = pool;
const UserPool = new CognitoUserPool(poolData);


/* dev
UserPoolId: 'eu-central-1_IW6n1Oh3S',
ClientId: '77411hdrmdb0pcgaqgfk1raigh',
*/
//prod
export default UserPool