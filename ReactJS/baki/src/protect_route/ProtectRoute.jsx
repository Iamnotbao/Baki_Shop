import React from "react";
import { Route } from "react-router-dom";
import { useAuthentication } from "../authorization/AuthProvider";

const ProtectRoute = ({ component: Component, ...rest }) => {
    // const { isAuthenticated } = useAuthentication();
    // return (<>
    //     <Route
    //         {...rest}
    //         render={props =>

    //             isAuthenticated ? <Component {...props} /> : <Navigate to="Login" />
    //         }
    //     />
    // </>) 

}
export default ProtectRoute;
