import './styles.css'

import FoodImg from 'assets/images/uva.png'
import FoodInfo from 'components/FoodInfo';
import { Food } from 'types/food';

type Props = { 
    food: Food;
}

const FoodCard = ( { food } : Props ) => {
    return (
        <div className='base-card food-card'>
            <div className='card-top-container'>
                <img src={food.imgUrl} alt={food.name}/>
            </div>
            <div className='card-bottom-container'>
                <h6>{food.name}</h6>
                <FoodInfo food={food}></FoodInfo>
            </div>
        </div>
    );
}

export default FoodCard;