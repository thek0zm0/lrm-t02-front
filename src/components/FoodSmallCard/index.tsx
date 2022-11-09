import './styles.css'

import { Food } from 'types/food';

type Props = { 
    food: Food;
}

const FoodSmallCard = ( { food } : Props ) => {
    return (
        <div className='card food-card-content'>
            <div className='food-card-image'>
                <img src={food.imgUrl} alt={food.name}/>
            </div>
            <div className='food-name'>
                <h4>{food.name}</h4>
                <h5>{food.quantity} gr</h5>
            </div>
        </div>
    );
}

export default FoodSmallCard;