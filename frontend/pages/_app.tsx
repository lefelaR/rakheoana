import React,{useState, useEffect}  from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layouts/frontendLayout";
import "../styles/style.css";
import 'animate.css';
import AppRolesContext, { IAppRoleContext } from '@contexts/appRolesContext';
import { getAllRoles } from "@services/rolesService";
import UserContext, { IUserContext } from '@contexts/userContext';
import { useRouter } from "next/router";
import checkSession from '@services/auth/checkSession';
import {getUser} from '@services/usersService';
import User from '@models/user.model';

export default function App({ Component, pageProps }: AppProps) {

  const [appRoles, setAppRoles] = useState<IAppRoleContext>({ roles: [] });
  const router = useRouter();


  const updateUser = async () => {  
    
    await checkSession()
        .then((cognitoUser: User) => {
            getUser(cognitoUser.id)
                .then((res) => { 
                    const currentUser: User = {
                        ...res,
                    };

                    if(Object.keys(currentUser).length === 0){
                        setCurrentUser({ ...res, isLoading: false});
                    } else{
                    setCurrentUser({
                        currentUser: currentUser,
                        onUpdated: () => updateUser(),
                        onLoggedOut: () => handleLoggedOut(),
                        isLoading: false,
                    });
                }
                })
                .catch((er) => {
                    console.log(er);
                    setCurrentUser({ ...currentUser, isLoading: false });
                });
        })
        .catch((err) => {
            console.log(err);
            setCurrentUser({ ...currentUser, isLoading: false });
        });
};
const [currentUser, setCurrentUser] = useState<IUserContext>({
    currentUser: undefined,
    onUpdated: () => updateUser(),
    onLoggedOut: () => handleLoggedOut(),
    isLoading: true,
});

useEffect(() => {
  const update = async () => {
      await updateUser();
      const appRolesResult = await getAllRoles();
      setAppRoles({ roles: appRolesResult });
  };
  update();
}, []);

const handleLoggedOut = () => {
  setCurrentUser({
      currentUser: undefined,
      onUpdated: () => updateUser(),
      onLoggedOut: () => {},
      isLoading: false,
  });
  router.push('/');
};


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
