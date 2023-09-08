import User from 'models/user.model';
import React from 'react';
const currentUser: User = new User();
export interface IUserContext {
    currentUser: User | undefined ;
    onUpdated: Function;
    onLoggedOut: Function;
    isLoading: boolean
}
const UserContext = React.createContext<IUserContext>({
    currentUser,
    onLoggedOut: () => {},
    onUpdated: () => {},
    isLoading: true,
});

UserContext.displayName = 'UserContext';

export default UserContext;
