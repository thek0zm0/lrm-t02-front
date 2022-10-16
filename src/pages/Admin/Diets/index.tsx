import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";

const Diets = () => {
    return (
        <>
        <Switch>
            <Route path="/admin/diets" exact>
                <List></List>
            </Route>
            <Route path="/admin/diets/:dietId">
                <Form></Form>
            </Route>
        </Switch>
        </>
    )
}

export default Diets;