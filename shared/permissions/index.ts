import DepartmentPermissions from "./departmentPermissions";
import IssuePermissions from "./IssuePermissions";
import CategoryPermissions from "./categoriesPermissions";
import RolePermissions from "./rolePermissions";
import LogPermissions from "./LogPermissions";
import UserPermissions from "./userPermissions";
import NewsLetterPermissions from "./newsLetterPermissions";
import PropertyPermissions from "./propertyPermissions";
import MailSubscriberPermissions from "./mailSubscriberPermissions";
import AGMPermissions from "./agmPermissions";
import WayLeavePermissions from "./wayLeavePermissions";

const joinedPermission = [
	...Object.values(CategoryPermissions),
	...Object.values(IssuePermissions),
	...Object.values(DepartmentPermissions),
	...Object.values(RolePermissions),
	...Object.values(LogPermissions),
	...Object.values(UserPermissions),
	...Object.values(NewsLetterPermissions),
	...Object.values(PropertyPermissions),
	...Object.values(MailSubscriberPermissions),
	...Object.values(AGMPermissions),
	...Object.values(WayLeavePermissions)
];
export default joinedPermission.map((permission) => permission);
