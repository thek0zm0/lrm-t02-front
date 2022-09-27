import './styles.css'

import { Food } from 'types/food';
import ProcessTypeBadge from '../ProcessTypeBadge';

type Props = { 
    food: Food;
}

const FoodCrudCard = ( { food } : Props ) => {
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
                <button className="btn-outline-danger food-crud-card-button food-crud-card-button-delete">Delete</button>
                <button className="btn-outline-secondary food-crud-card-button">Edit</button>
            </div>
        </div>
        </div>
    );
}

export default FoodCrudCard;