import React, {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
import {Redirect, Route} from "react-router";

// @ts-ignore
const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {user} = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!user ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/login"}/>
                )
            }
        />
    );
};

export default PrivateRoute