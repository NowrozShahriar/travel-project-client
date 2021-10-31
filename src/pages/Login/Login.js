import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { setIsLoading, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                history.push(redirect_uri);
            })
            .catch(() => console.log('Canceled'))
            .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <h2>Please Login</h2> 
            <button onClick={handleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;