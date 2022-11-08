import './styles.css'

import { Food } from 'types/food';

type Props = { 
    food: Food;
}

const FoodSmallCard = ( { food } : Props ) => {
    return (
        <div className='card '>
            <div className='food-card-image'>
                <img src={food.imgUrl} alt={food.name}/>
            </div>
            <div className=''>
                <h4>{food.name}</h4>
            </div>
        </div>
    );
}

export default FoodSmallCard;