import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Link, useParams } from 'react-router-dom';
import { Food } from 'types/food';
import axios from 'axios';
import './styles.css';
import { BASE_URL } from 'util/Requests';
import { useEffect, useState } from 'react';
import ProductInfoLoader from './FoodInfoLoader';
import ProductDetailsLoader from './FoodDetailsLoader';

type UrlParams = {
    foodId: string;
}

const FoodDetails = () => {

    const { foodId } = useParams<UrlParams>();

    const [food, setFood] = useState<Food>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/food/${foodId}`)
        .then(response => {
        setFood(response.data);
    }).finally(() => {
        setIsLoading(false);
    });
    }, [foodId]);

    return (
        <div className="food-details-page-container">
            <div className="base-card food-details-card">
                <Link to="/foods">
                    <div className="goback-container">
                        <ArrowIcon></ArrowIcon>
                        <h2>Go Back</h2>
                    </div>
                </Link>
                <div className="row">
                    {isLoading ? <ProductInfoLoader></ProductInfoLoader> : 
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src={food?.imgUrl} alt={food?.name} />
                        </div>
                        <div className="name-price-container">
                            <h1>{food?.name}</h1>
                        </div>
                    </div>}
                    {isLoading ? <ProductDetailsLoader></ProductDetailsLoader> : 
                    <div className="col-xl-6">
                        <div className="details-container">
                            <h2>Detalhes</h2>
                            <p>{food?.foodGroup}</p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default FoodDetails;