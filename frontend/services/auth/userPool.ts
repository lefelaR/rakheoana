import { CognitoUserPool, ICognitoUserPoolData } from 'amazon-cognito-identity-js'

const UserPoolId = process.env.NEXT_PUBLIC_USER_POOL_ID
const ClientId = process.env.NEXT_PUBLIC_CLIENT_ID
const pool = { UserPoolId, ClientId }

//@ts-ignore
const poolData: ICognitoUserPoolData = pool;


export default  new CognitoUserPool(poolData);