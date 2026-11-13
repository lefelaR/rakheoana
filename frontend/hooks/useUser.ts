import { useState, useContext, useEffect } from 'react';
import UserContext, { IUserContext } from 'contexts/userContext';

export default function useUserContext() {
    return useContext(UserContext);
}
