import React from "react";
import { Route, Redirect } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";

function PrivateRoute({children, ...rest}) {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <img width="100px" src="https://i.ibb.co/2c9qxBN/hug.gif" alt="" />
    }
    return (
        <Route 
            {...rest} 
            render={({location}) => user.email ? 
                children : <Redirect 
                    to={{
                        pathname: '/login',
                        state: {from: location}
                    }} 
                ></Redirect>
            }
        >
        </Route>
    );
};

export default PrivateRoute;