import { Route, Switch } from "react-router-dom";
import List from "./List";

const Diets = () => {
    return (
        <>
        <Switch>
            <Route path="/admin/diets" exact>
                <List></List>
            </Route>
        </Switch>
        </>
    )
}

export default Diets;