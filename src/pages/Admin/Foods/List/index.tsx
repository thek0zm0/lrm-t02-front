import { AxiosRequestConfig } from "axios";
import FoodCrudCard from "pages/Admin/Foods/FoodCrudCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Food } from "types/food";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/Requests";
import './styles.css';

const List = () => {

    const [page, setPage] = useState<SpringPage<Food>>();

    useEffect(() => {
        getFoods();
    }, []);

    const getFoods = () => {
        const params : AxiosRequestConfig = {
            method: "GET",
            url: `/food/all`,
            params: {
                page: 0,
                size: 12
            }
        };

        requestBackend(params)
            .then(response => {
                setPage(response.data);
            });
    }

    return (
        <>
            <div className="food-crud-bar-container">
                <Link to="/admin/foods/create">
                    <button className="btn btn-primary text-white btn-crud-add">Adicionar</button>
                </Link>
            <div className="base-card food-filter-container">Barra de busca</div>
            </div>
            <div className="row">
                {page?.content.map(food => (
                    <div key={food.id} className="col-sm-6 col-md-12">
                        <FoodCrudCard food={food} onDelete={() => getFoods()}></FoodCrudCard>
                    </div>
                ))}
            </div>
        </>
    )
}

export default List;