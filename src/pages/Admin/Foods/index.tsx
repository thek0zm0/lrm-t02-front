import { Route, Switch } from "react-router-dom"
import Form from "./Form";
import List from "./List";


const Foods = () => {
    return (
        <>
        <Switch>
            <Route path="/admin/foods" exact>
                <List></List>
            </Route>
            <Route path="/admin/foods/:foodId">
                <Form></Form>
            </Route>
        </Switch>
        </>
    )
}

export default Foods;