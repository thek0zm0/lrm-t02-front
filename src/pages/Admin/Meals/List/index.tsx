import { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Meal } from "types/meal";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/Requests";
import MealCrudCard from "../MealCrudCard";


const List = () => {
    const [page, setPage] = useState<SpringPage<Meal>>();

    useEffect(() => {
        getMeals();
    }, []);

    const getMeals = () => {
        const params : AxiosRequestConfig = {
            method: "GET",
            url: `/meal/all`,
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
            <div className="meal-crud-bar-container">
                <Link to="/admin/meals/create">
                    <button className="btn btn-primary text-white btn-crud-add">Adicionar</button>
                </Link>
            <div className="base-card meal-filter-container">Barra de busca</div>
            </div>
            <div className="row">
                {page?.content.map(meal => (
                    <div key={meal.id} className="col-sm-6 col-md-12">
                        <MealCrudCard meal={meal} onDelete={() => getMeals()}></MealCrudCard>
                    </div>
                ))}
            </div>
        </>
    )
}

export default List;