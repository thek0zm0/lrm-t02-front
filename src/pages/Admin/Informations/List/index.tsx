import { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Information } from "types/information";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/Requests";
import InformationCrudCard from "../InformationCrudCard";


const List = () => {

    const [page, setPage] = useState<SpringPage<Information>>();

    useEffect(() => {
        getInformations();
    }, []);

    const getInformations = () => {
        const params : AxiosRequestConfig = {
            method: "GET",
            url: `/information/all`,
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
            <div className="information-crud-bar-container">
                <Link to="/admin/informations/create">
                    <button className="btn btn-primary text-white btn-crud-add">Adicionar</button>
                </Link>
            <div className="base-card information-filter-container">Barra de busca</div>
            </div>
            <div className="row">
                {page?.content.map(information => (
                    <div key={information.id} className="col-sm-6 col-md-12">
                        <InformationCrudCard information={information} onDelete={() => getInformations()}></InformationCrudCard>
                    </div>
                ))}
            </div>
        </>
    )
}

export default List;