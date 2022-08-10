import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import Auth from "pages/Admin/Auth";
import BodyInfo from "pages/BodyInfo";
import Diet from "pages/Diet";
import FoodDetails from "pages/FoodDetails";
import Foods from "pages/Foods";
import Home from "pages/Home";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import history from "util/history";


const Routes = () => (
    <Router history={history}>
    <Navbar></Navbar>
        <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/foods" exact>
                <Foods></Foods>
            </Route>
            <Route path="/foods/:foodId">
                <FoodDetails></FoodDetails>
            </Route>
            <Redirect from="/admin/auth" to="/admin/auth/login" exact/>
            <Route path="/admin/auth">
                <Auth></Auth>
            </Route>
            <Redirect from="/admin" to="/admin/foods" exact/>
            <Route path="/admin">
                <Admin></Admin>
            </Route>
            <Route path="/body-info">
                <BodyInfo></BodyInfo>
            </Route>
            <Route path="/diet">
                <Diet></Diet>
            </Route>
        </Switch>
    </Router>
);

export default Routes;