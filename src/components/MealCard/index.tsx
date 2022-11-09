import './styles.css'

import { Meal } from 'types/meal';
import FoodSmallCard from 'components/FoodSmallCard';

type Props = { 
    meal: Meal;
}

const MealCard = ( { meal } : Props ) => {
    return (
        <div className='card meal-card'>
            <div className=''>
                <h4>{meal.name}</h4>
                <h4>Horário: {meal.timeHour}</h4>
            </div>
            <div className='food-card-meal'>
                {meal.foods?.map( food => {
                    return (
                        <FoodSmallCard food={food}></FoodSmallCard>
                    )
                })}
            </div>
        </div>
    );
}

export default MealCard;