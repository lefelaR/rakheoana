import { useContext, useEffect, useState } from 'react';
import UserContext from '@contexts/userContext';
import User from 'models/user.model';
import { getAllRoles } from '@services/rolesService';
import Role from '../models/role.model';
import AppRolesContext from '@contexts/appRolesContext';
import { Console } from 'console';

const CheckPermissions = (user: User, permission: string, appRoles: Role[]): boolean => {
    const userRoles: Role[] = [];
    let hasPermission = false;

    user.roles.forEach((roleId) => {
        const role = appRoles.find((x) => x.id === roleId);
        if (role) {
            userRoles.push(role);
        }
    });
    for (let x = 0; x < userRoles.length; ++x) {
        for (let p = 0; p < userRoles[x].permissions.length; p++) {
            if (userRoles[x].permissions[p] === permission) {
                hasPermission = true;
            }
        }
    }
    return hasPermission;
};

export default function useCheckPermission(permission: string | undefined): boolean {
    const { currentUser } = useContext(UserContext);
    const { roles } = useContext(AppRolesContext);
    const [hasPermission, setPermission] = useState(false);

    useEffect(() => {
        if (permission) {
            if (currentUser) {
                // There is an issue with this function permissions sometimes come out as false
                const result = CheckPermissions(currentUser, permission, roles);

                setPermission(result);
            } else {
                setPermission(true);
            }
        } else {
            setPermission(true);
        }
    }, []);
    return hasPermission;
}
