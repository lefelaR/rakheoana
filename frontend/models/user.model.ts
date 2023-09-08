export enum AuthenticationStatus {
    Anonymous = 'Anonymous',
    Authenticated = 'Authenticated',
}

export default class User {
    id: string = '';
    firstName: string = '';
    lastName: string = '';
    avatar: string = '';
    username: string = '';
    roles: string[] = [];
    email: string = '';
    department: string = '';
    createdAt: number = 0;
    lastLoggedIn: number = 0;
    isActive: boolean = true;
    authStatus: AuthenticationStatus = AuthenticationStatus.Anonymous;
}
