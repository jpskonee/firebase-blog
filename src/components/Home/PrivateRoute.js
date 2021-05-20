import React, { useContext } from 'react'
import {Route, Redirect} from "react-router-dom"
import { AuthContext } from '../State-Management/AuthState'

const PrivateRoute = ({ component: RoutedComponent, ...rest }) => {
    const { activeUser } = useContext(AuthContext);
    
    return (
        <Route
            {...rest}
            render={(propsRoute) => {
                return (
                    {activerUser ? <RoutedComponent {...propsRoute} /> : <Redirect to="/login" />}
                )
        />
    )
}

export default PrivateRoute
