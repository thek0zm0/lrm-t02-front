import { AxiosRequestConfig } from "axios";
import FoodCard from "components/FoodCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Food } from "types/food";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/Requests";
import CardLoader from "./CardLoader";
import './styles.css';

const Foods = () => {

    const [page, setPage] = useState<SpringPage<Food>>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const params : AxiosRequestConfig = {
            method: "GET",
            url: `/food/all`,
            params: {
                page: 0,
                size: 12
            }
        };

        setIsLoading(true);
        requestBackend(params)
            .then(response => {
                setPage(response.data);
            }).finally(() => {
                setIsLoading(false);
            });
    }, []);


    return (
        <div className="container my-4">
            <div className="container my-4 foods-container">
                <div className="row foods-title-container">
                    <h1>Busca de Alimentos</h1>
                </div>
            </div>

            <div className="row">
                {isLoading ? 
                <CardLoader></CardLoader>
                : (
                    page?.content.map( food => {
                    return (
                        <div className="col-sm-6 col-lg-4 col-xl-3" key={food.id}>
                            <Link to ="/foods/1"> 
                                <FoodCard food={food}></FoodCard>
                            </Link>
                        </div>
                    );
                }))}

            </div>

            <div className="row">
                <Pagination></Pagination>
            </div>
        </div>
    );
}

export default Foods;