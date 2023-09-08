const featureName = "permission.agm";
const AGMPermissions = {
	create: `${featureName}.create`,
	view: featureName + ".view",
	edit: featureName + ".edit",
	delete: featureName + ".delete",
	editRoles: featureName + ".manageRoles",
    changeDepartment: featureName + ".changeDepartment",
};
export default AGMPermissions;
