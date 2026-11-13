import User from 'models/user.model';
import userSignUp from './auth/userSignUp';
import { http } from './httpService';
// import logger from './logService';
import { getAllRoles, getOrCreateDefaultRole } from './rolesService';
const url = '/users';

export const getAllUsers = async () => {
    const { data: result } = await http.get(url);
    return result.data.Items;
};

export const getUser = async (userId: string) => {
    const { data: result } = await http.get(`${url}/${userId}`);
    return result.data;
};

export const addUser = async (user: User | any) => {
    try {
        
        // const defaultRole = await getOrCreateDefaultRole();
        const cognitoUser: any = await userSignUp({
            email: user.email,
            password: user.password,
            name: user.firstName,
            familyName: user.lastName,
        });
    
        let newUser: User = new User();
        newUser.id = cognitoUser.userSub;
        newUser.firstName = user.firstName;
        newUser.lastName = user.lastName;
        newUser.department = '';
        // newUser.roles = [defaultRole.id];
        newUser.email = user.email;
        newUser.avatar =
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
        const { data: result } = await http.post(url, newUser);
        await updateUser(newUser);
        return ' result.data';
    } catch (error:any) {
        // logger.log(error);
        throw new Error(error.message);
    }
};

export const updateUser = async (user: User) => {
    const { data: result } = await http.put(`${url}/${user.id}`, user);
    return result.data;
};

export const addUserOrUpdate = async (user: User) => {
    if (user.id) {
        return await updateUser(user);
    } else {
        return addUser(user);
    }
};
