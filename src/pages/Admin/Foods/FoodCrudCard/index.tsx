import './styles.css'

import FoodInfo from 'components/FoodInfo';
import { Food } from 'types/food';
import ProcessTypeBadge from '../ProcessTypeBadge';

type Props = { 
    food: Food;
}

const FoodCrudCard = ( { food } : Props ) => {
    return (
        <div className='base-card food-crud-card'>
            <div className='food-crud-card-top-container'>
                <img src={food.imgUrl} alt={food.name}/>
            </div>
            <div>
                <div className='food-crud-card-bottom-container'>
                    <h4>{food.name}</h4>
                    <FoodInfo food={food}></FoodInfo>
                </div>
                <div className="food-crud-process-container">
                    <ProcessTypeBadge name={food.foodGroup}></ProcessTypeBadge>
                    <ProcessTypeBadge name={food.foodGroup}></ProcessTypeBadge>
                </div>
            </div>
        </div>
    );
}

export default FoodCrudCard;