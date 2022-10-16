import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";


const Informations = () => {
    return (
        <>
        <Switch>
            <Route path="/admin/informations" exact>
                <List></List>
            </Route>
            <Route path="/admin/informations/:informationId">
                <Form></Form>
            </Route>
        </Switch>
        </>
    )
}

export default Informations;