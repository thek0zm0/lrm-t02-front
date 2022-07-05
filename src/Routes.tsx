import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import BodyInfo from "pages/BodyInfo";
import Diet from "pages/Diet";
import Foods from "pages/Foods";
import Home from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";


const Routes = () => (
    <BrowserRouter>
    <Navbar></Navbar>
        <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/foods">
                <Foods></Foods>
            </Route>
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