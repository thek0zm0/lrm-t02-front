import { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Diet } from "types/diet";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/Requests";
import DietCrudCard from "../DietCrudCard";
import './styles.css';

const List = () => {
    const [page, setPage] = useState<SpringPage<Diet>>();

    useEffect(() => {
        getDiets();
    }, []);

    const getDiets = () => {
        const params : AxiosRequestConfig = {
            method: "GET",
            url: `/diet/all`,
            withCredentials: true,
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
            <div className="diet-crud-bar-container">
                <Link to="/admin/diets/create">
                    <button className="btn btn-primary text-white btn-crud-add">Adicionar</button>
                </Link>
            </div>
            <div className="row">
                {page?.content.map(diet => (
                    <div key={diet.id} className="col-sm-6 col-md-12">
                        <DietCrudCard diet={diet} onDelete={() => getDiets()}></DietCrudCard>
                    </div>
                ))}
            </div>
        </>
    )
}

export default List;