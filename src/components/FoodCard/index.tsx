import './styles.css'

import FoodImg from 'assets/images/uva.png'
import FoodInfo from 'components/FoodInfo';

const FoodCard = () => {
    return (
        <div className='base-card food-card'>
            <div className='card-top-container'>
                <img src={FoodImg} alt="Foto da uva"/>
            </div>
            <div className='card-bottom-container'>
                <h6>Nome do alimento</h6>
                <FoodInfo></FoodInfo>
            </div>
        </div>
    );
}

export default FoodCard;