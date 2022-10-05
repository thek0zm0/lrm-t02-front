import './styles.css'

import { Food } from 'types/food';
import ProcessTypeBadge from '../ProcessTypeBadge';
import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/Requests';

type Props = { 
    food: Food;
    onDelete: Function;
}

const FoodCrudCard = ( { food, onDelete } : Props ) => {

    const handleDelete = (foodId: number) => {
        if (!window.confirm("Excluir?")) {
            return;
        }

        const params : AxiosRequestConfig = {
            method: "DELETE",
            url: `/food/${foodId}`,
            withCredentials: true
        };

        requestBackend(params).then(() => {
            onDelete();
        })
    }

    return (
        <div className="food-crud-container">
        <div className='base-card food-crud-card'>
            <div className='food-crud-card-top-container'>
                <img src={food.imgUrl} alt={food.name}/>
            </div>
            <div className='food-crud-card-details'>
                <div className='food-crud-card-bottom-container'>
                    <h4>{food.name}</h4>
                </div>
                <div className="food-crud-process-container">
                    <ProcessTypeBadge name={food.foodGroup}></ProcessTypeBadge>
                </div>
            </div>
            <div className="food-crud-card-buttons-container">
                <button className="btn-outline-danger food-crud-card-button food-crud-card-button-delete" onClick={() => handleDelete(food.id)}>Delete</button>
                <Link to={`/admin/foods/${food.id}`}>
                    <button className="btn-outline-secondary food-crud-card-button">Edit</button>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default FoodCrudCard;