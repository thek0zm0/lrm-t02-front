import { AuthContext } from "AuthContext";
import { AxiosRequestConfig } from "axios";
import DietCard from "components/DietCard";
import { useContext, useEffect, useState } from "react";
import { Diet } from "types/diet";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/Requests";

const DietInfo = () => {

    const { authContextData } = useContext(AuthContext);
    const [page, setPage] = useState<SpringPage<Diet>>();

    useEffect(() => {
        const params : AxiosRequestConfig = {
            method: "GET",
            url: `/diet/`,
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
                page?.content.map( diet => {
                    return (
                        <DietCard diet={diet}></DietCard>
                    )
                })}
            </> 
            : <><h1>É necessário estar logado para verificar a dieta.</h1></>}
        </div>
    );
}

export default DietInfo;