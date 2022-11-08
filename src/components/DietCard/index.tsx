import './styles.css'
import { Diet } from 'types/diet';
import MealCard from 'components/MealCard';

type Props = { 
    diet: Diet;
}

const DietCard = ( { diet } : Props ) => {
    return (
        <div className=''>
            <div className=''>
                <h2>{diet.name}</h2>
                <h4>{diet.description}</h4>
            </div>
            <div className=''>
                {diet.meals?.map( meal => {
                    return (
                        <MealCard meal={meal}></MealCard>
                    )
                })}
            </div>
        </div>
    );
}

export default DietCard;