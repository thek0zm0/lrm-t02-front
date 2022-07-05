import { Food } from 'types/food';
import './styles.css'

type Props = { 
    food: Food;
}

const FoodInfo = ( { food } : Props) => {
    return (
        <div className='food-details-container'>
        <div className='food-info-container'>
            <h2>foodGroup</h2>
            <h2>quantity</h2>
            <h2>calorie</h2>
            <h2>protein</h2>
            <h2>carbohydrate</h2>
            <h2>fat</h2>
            <h2>sodium</h2>
            <h2>sugar</h2>
            <h2>vitaminA</h2>
            <h2>vitaminC</h2>
            <h2>iron</h2>
        </div>
        <div className='food-info-container'>
            <h3>{food.foodGroup}</h3>
            <h3>{food.quantity}</h3>
            <h3>{food.calorie}</h3>
            <h3>{food.protein}</h3>
            <h3>{food.carbohydrate}</h3>
            <h3>{food.fat}</h3>
            <h3>{food.sodium}</h3>
            <h3>{food.sugar}</h3>
            <h3>{food.vitaminA}</h3>
            <h3>{food.vitaminC}</h3>
            <h3>{food.iron}</h3>
        </div>
        </div>
    );
}

export default FoodInfo;