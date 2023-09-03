import { http } from './httpService';
import Role from '../models/role.model';
import moment from 'moment';
import Constants from 'utils/constants';
const url = `/roles/`;

interface IRolesCache {
    roles: Role[];
    cacheTime: number;
}

const roleCache: IRolesCache = {
    roles: [],
    cacheTime: 2,
};
export const getAllRoles = async (): Promise<Role[]> => {
    try {
        debugger
        const now = moment(new Date());
        const lastCacheTime = moment(new Date(roleCache.cacheTime));
        const duration = moment.duration(now.diff(lastCacheTime));
        const minDiff = duration.asMinutes();

        if (roleCache.cacheTime === undefined || minDiff > 1) {
            const { data: result } = await http.get(url);
            roleCache.roles = result.data.Items;
            roleCache.cacheTime = new Date().getTime();
        }
        return roleCache.roles;
    } catch (e: any) {
        throw new Error(e.message);
    }
};
export const getRole = async (id: string): Promise<Role> => {
    try {
        const { data } = await http.get(url + id);
        return data;
    } catch (e: any) {
        throw new Error(e.message);
    }
};

export const createRole = async (role: Role): Promise<Role> => {
    try {
        const { data } = await http.post(url, role);
        roleCache.roles.push(data);
        return data.data;
    } catch (e: any) {
        throw new Error(e.message);
    }
};

export const updateRole = async (id: string, role: Role): Promise<Role> => {
    try {
        const { data } = await http.put(url + id, role);
        return data.data;
    } catch (e: any) {
        throw new Error(e.message);
    }
};
export const addOrUpdateRole = async (role: Role) => {
    if (role.id) return await updateRole(role.id, role);
    else return await createRole(role);
};
export const deleteRole = async (id: string): Promise<Role> => {
    try {
        const { data } = await http.delete(url + id);
        return data;
    } catch (e: any) {
        throw new Error(e.message);
    }
};

export const getOrCreateDefaultRole = async (): Promise<Role> => {
    try {
        const roles = await getAllRoles();
        const role = roles.find((x) => x.title === 'Default');
        if (role) {
            return role;
        } else {
            const newDefaultRole = Constants.DefaultRole;
            const result = await createRole(newDefaultRole);
            newDefaultRole.id = result.id;
            return newDefaultRole;
        }
    } catch (e: any) {
        throw new Error(e.message);
    }
};
