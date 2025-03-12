import { useState, useEffect } from 'react';
import { decodeToken, isExpired } from 'react-jwt';

const useUserIsLogin = (): {
    isLoggedIn: boolean | null,
    userData: any,
    reCheckLogin: () => void
} => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
    const [userData, setUserData] = useState<any>({});

    const reCheckLogin = () => {
        const token = localStorage.getItem('accessToken');
        if (token && !isExpired(token)) {
            setIsLoggedIn(true);
            setUserData(decodeToken(token));
        } else {
            setIsLoggedIn(false);
        }
    }

    useEffect(() => {
        reCheckLogin();
    }, []);

    return { isLoggedIn, userData, reCheckLogin };
};

export default useUserIsLogin;