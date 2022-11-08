import { AuthContext } from "AuthContext";
import { AxiosRequestConfig } from "axios";
import { useContext, useEffect, useState } from "react";
import { Information } from "types/information";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/Requests";

const BodyInfo = () => {
    const { authContextData } = useContext(AuthContext);
    const [page, setPage] = useState<SpringPage<Information>>();

    useEffect(() => {
        const params : AxiosRequestConfig = {
            method: "GET",
            url: `/information/`,
            withCredentials: true
        };

        requestBackend(params)
            .then(response => {
                setPage(response.data);
            });
    }, []);

  
    return (
        <div>
            {authContextData.authenticated ? 
            <>
            {
                page?.content.map( information => {
                    return (
                        <div className="card" key={information.id}>
                            <h4 className="card-title">Informações Corporais em {information.createdDate}</h4>
                            <h4 className="card-text">Altura: {information.height}</h4>
                            <h4 className="card-text">Peso: {information.weight}</h4>
                            <h4 className="card-text">Idade: {information.age}</h4>
                            <h4 className="card-text">Grau de Atividade: {information.activityStatus}</h4>
                            <h4 className="card-text">Taxa metabólica: {information.basalMetabolicRate}</h4>
                        </div>
                    );
                })}
            </> 
            : <><h1>É necessário estar logado para verificar as informações corporais.</h1></>}
        </div>
    );
}

export default BodyInfo;