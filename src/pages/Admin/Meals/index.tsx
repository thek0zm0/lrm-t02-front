import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";


const Meals = () => {
    return (
        <>
        <Switch>
            <Route path="/admin/meals" exact>
                <List></List>
            </Route>
            <Route path="/admin/meals/:mealId">
                <Form></Form>
            </Route>
        </Switch>
        </>
    )
}

export default Meals;