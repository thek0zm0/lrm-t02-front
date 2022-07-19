import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import BodyInfo from "pages/BodyInfo";
import Diet from "pages/Diet";
import FoodDetails from "pages/FoodDetails";
import Foods from "pages/Foods";
import Home from "pages/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


const Routes = () => (
    <BrowserRouter>
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
    </BrowserRouter>
);

export default Routes;