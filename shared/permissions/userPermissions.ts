const featureName = "permission.users";
const UserPermissions = {
	create: `${featureName}.create`,
	view: featureName + ".view",
	edit: featureName + ".edit",
	delete: featureName + ".delete",
	editRoles: featureName + ".manageRoles",
	changeDepartment: featureName + ".changeDepartment",
};
export default UserPermissions;
