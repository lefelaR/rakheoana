const featureName = "permission.issues";
const IssuePermissions = {
	create: featureName + ".create",
	edit: featureName + ".edit",
	delete: featureName + ".delete",
	view: featureName + ".view",
	viewOthers: featureName + ".viewOthers",
	assignUsers: featureName + ".assignUsers",
	changeStatus: featureName + ".changeStatus",
	manageJobReference:featureName +".manageJobReference"
};
export default IssuePermissions;
