import { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";
import { Diet } from "types/diet";
import { requestBackend } from "util/Requests";
import MealBadge from "../MealBadge";
import UserBadge from "../UserBadge";

type Props = { 
    diet: Diet;
    onDelete: Function;
}

const DietCrudCard = ( { diet, onDelete } : Props ) => {

    const handleDelete = (dietId: number) => {
        if (!window.confirm("Excluir?")) {
            return;
        }

        const params : AxiosRequestConfig = {
            method: "DELETE",
            url: `/diet/${dietId}`,
            withCredentials: true
        };

        requestBackend(params).then(() => {
            onDelete();
        })
    }

    return (
        <div className="diet-crud-container">
        <div className='base-card diet-crud-card'>
            <div className='diet-crud-card-top-container'>
            </div>
            <div className='diet-crud-card-details'>
                <div className='diet-crud-card-bottom-container'>
                    <h4>{diet.name}</h4>
                    <h4>{diet.description}</h4>
                    <h4>{diet.startDate}</h4>
                    <h4>{diet.endDate}</h4>
                </div>
                <div className="diet-crud-process-container">
                    <h4>Refeições</h4>
                    {diet.meals.map((meal) => (
                        <MealBadge name={meal.name} key={meal.id} />
                    ))}
                </div>
                <div className="diet-crud-process-container">
                    <h4>Usuários</h4>
                    {diet.users.map((user) => (
                        <UserBadge email={user.email} key={user.id} />
                    ))}
                </div>
            </div>
            <div className="diet-crud-card-buttons-container">
                <button className="btn-outline-danger diet-crud-card-button diet-crud-card-button-delete" onClick={() => handleDelete(diet.id)}>Delete</button>
                <Link to={`/admin/diets/${diet.id}`}>
                    <button className="btn-outline-secondary diet-crud-card-button">Edit</button>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default DietCrudCard;