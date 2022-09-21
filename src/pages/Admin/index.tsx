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
                    <PrivateRoute path="/admin/foods">
                        <h1>Alimentos CRUD</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/diets">
                        <h1>Dietas CRUD</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/meals">
                        <h1>Refeições CRUD</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/users">
                        <Users></Users>
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;