import PrivateRoute from "components/PrivateRoute";
import { Switch } from "react-router-dom";
import Navbar from "./Navbar";
import './styles.css';
import Users from "./User";

const Admin = () => {
    return (
        <div className="admin-container">
            <Navbar></Navbar>
            <div className="admin-content">
                <Switch>
                    <PrivateRoute path="/admin/foods" roles={['ROLE_ADMIN', 'ROLE_NUTRITIONIST']}>
                        <h1>Alimentos CRUD</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/diets" roles={['ROLE_ADMIN', 'ROLE_NUTRITIONIST']}>
                        <h1>Dietas CRUD</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/meals" roles={['ROLE_ADMIN', 'ROLE_NUTRITIONIST']}>
                        <h1>Refeições CRUD</h1>
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