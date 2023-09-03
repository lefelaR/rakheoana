import { useEffect } from 'react';
import checkSession from '@services/auth/checkSession';

const useUserSession = () => {
    let user: any = null;
    useEffect(() => {
        checkSession()
            .then((res) => {
                user = res;
            })
            .catch((err) => console.log(err));
    });
    return user;
};

export default useUserSession;
