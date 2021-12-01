import { createContext, useState } from 'react';

const AuthContext = createContext();

// HOC
function AuthProvider(props) {
    const [isAuth, setIsAuth] = useState(false);

    function login() {
        setIsAuth(true);
    }

    function logout() {
        setIsAuth(false);
    }

    return <AuthContext.Provider value={{ login, logout, isAuth }} {...props} />;
}

export { AuthProvider, AuthContext };