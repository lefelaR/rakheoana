import IssuePermissions from '@sharedProject/permissions/IssuePermissions';
import AllPermissions from '@sharedProject/permissions';
import Role from 'models/role.model';

const DefaultRole = new Role();
DefaultRole.title = 'Default';
DefaultRole.description = 'Default User Role';
DefaultRole.permissions.push(IssuePermissions.view);
DefaultRole.permissions.push(IssuePermissions.create);
DefaultRole.permissions.push(IssuePermissions.edit);

const DefaultAdminRole = new Role();
DefaultAdminRole.title = 'Admin';
DefaultAdminRole.description = "Admin Role"
AllPermissions.forEach((permmission) => DefaultAdminRole.permissions.push(permmission));
export default {
    DefaultRole,
    DefaultAdminRole,
};
