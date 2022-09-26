import './styles.css'

import FoodInfo from 'components/FoodInfo';
import { Food } from 'types/food';

type Props = { 
    food: Food;
}

const FoodCrudCard = ( { food } : Props ) => {
    return (
        <div className='base-card food-card'>
            <div className='card-top-container'>
                <img src={food.imgUrl} alt={food.name}/>
            </div>
            <div className='card-bottom-container'>
            <h4>{food.name}</h4>
                <FoodInfo food={food}></FoodInfo>
            </div>
        </div>
    );
}

export default FoodCrudCard;