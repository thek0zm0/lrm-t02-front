import { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";
import { Meal } from "types/meal";
import { requestBackend } from "util/Requests";
import FoodBadge from "../FoodBadge";

type Props = { 
    meal: Meal;
    onDelete: Function;
}

const MealCrudCard = ( { meal, onDelete } : Props ) => {

    const handleDelete = (mealId: number) => {
        if (!window.confirm("Excluir?")) {
            return;
        }

        const params : AxiosRequestConfig = {
            method: "DELETE",
            url: `/meal/${mealId}`,
            withCredentials: true
        };

        requestBackend(params).then(() => {
            onDelete();
        })
    }

    return (
        <div className="meal-crud-container">
        <div className='base-card meal-crud-card'>
            <div className='meal-crud-card-top-container'>
            </div>
            <div className='meal-crud-card-details'>
                <div className='meal-crud-card-bottom-container'>
                    <h4>{meal.name}</h4>
                    <h4>{meal.timeHour}</h4>
                </div>
                <div className="meal-crud-process-container">
                    {meal.foods.map((food) => (
                        <FoodBadge name={food.name} key={food.id} />
                    ))}
                </div>
            </div>
            <div className="meal-crud-card-buttons-container">
                <button className="btn-outline-danger meal-crud-card-button meal-crud-card-button-delete" onClick={() => handleDelete(meal.id)}>Delete</button>
                <Link to={`/admin/meals/${meal.id}`}>
                    <button className="btn-outline-secondary meal-crud-card-button">Edit</button>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default MealCrudCard;