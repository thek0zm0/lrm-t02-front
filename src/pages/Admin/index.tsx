import PrivateRoute from "components/PrivateRoute";
import { Switch } from "react-router-dom";
import Diets from "./Diets";
import Foods from "./Foods";
import Meals from "./Meals";
import Navbar from "./Navbar";
import './styles.css';
import Users from "./Users";

const Admin = () => {
    return (
        <div className="admin-container">
            <Navbar></Navbar>
            <div className="admin-content">
                <Switch>
                    <PrivateRoute path="/admin/foods" roles={['ROLE_ADMIN', 'ROLE_NUTRITIONIST']}>
                        <Foods></Foods>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/diets" roles={['ROLE_ADMIN', 'ROLE_NUTRITIONIST']}>
                        <Diets></Diets>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/meals" roles={['ROLE_ADMIN', 'ROLE_NUTRITIONIST']}>
                        <Meals></Meals>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/information" roles={['ROLE_ADMIN', 'ROLE_NUTRITIONIST']}>
                        <h1>Informações Corporais CRUD</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN', 'ROLE_NUTRITIONIST']}>
                        <Users></Users>
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;