import { Route, Switch } from "react-router-dom";
import List from "./List";


const Informations = () => {
    return (
        <>
        <Switch>
            <Route path="/admin/informations" exact>
                <List></List>
            </Route>
        </Switch>
        </>
    )
}

export default Informations;