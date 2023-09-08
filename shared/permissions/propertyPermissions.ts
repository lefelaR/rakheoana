const featureName = "permission.property";
const PropertyPermissions = {
	create: `${featureName}.create`,
	view: featureName + ".view",
	edit: featureName + ".edit",
	canEditPropertyDetails: featureName + "editPropertyDetails",
	canEditLevyDetails: featureName + "editLevyDetails",
	canEditOwnerDetails: featureName + "editOwnerDetails",
	canEditBuildingDetails: featureName + "editBuildingDetails",
	delete: featureName + ".delete",
};
export default PropertyPermissions;
