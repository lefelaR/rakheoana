import Role from 'models/role.model';
import User from 'models/user.model';
import React from 'react';
export interface IAppRoleContext {
    roles: Role[];
}
const AppRolesContext = React.createContext<IAppRoleContext>({ roles: [] });
AppRolesContext.displayName = 'AppRolesContext';

export default AppRolesContext;
