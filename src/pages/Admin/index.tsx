import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import './styles.css';

const Admin = () => {
    return (
        <div className="admin-container">
            <Navbar></Navbar>
            <div className="admin-content">
                <Switch>
                    <Route path="/admin/foods">
                        <h1>Alimentos CRUD</h1>
                    </Route>
                    <Route path="/admin/diets">
                        <h1>Dietas CRUD</h1>
                    </Route>
                    <Route path="/admin/meals">
                        <h1>Refeições CRUD</h1>
                    </Route>
                    <Route path="/admin/users">
                        <h1>Usuários CRUD</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;