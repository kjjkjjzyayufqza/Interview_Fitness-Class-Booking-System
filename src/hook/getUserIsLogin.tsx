import { useState, useEffect } from 'react';
import { decodeToken, isExpired } from 'react-jwt';

const useUserIsLogin = (): {
    isLoggedIn: boolean,
    userData: any
} => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userData, setUserData] = useState<any>({});
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token && !isExpired(token)) {
            setIsLoggedIn(true);
            setUserData(decodeToken(token));
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return { isLoggedIn, userData };
};

export default useUserIsLogin;