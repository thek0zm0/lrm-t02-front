import { AuthContext } from "AuthContext";
import { AxiosRequestConfig } from "axios";
import { useContext, useEffect, useState } from "react";
import { Information } from "types/information";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/Requests";

const Diet = () => {

    const { authContextData } = useContext(AuthContext);
    const [page, setPage] = useState<SpringPage<Information>>();

    useEffect(() => {
        const params : AxiosRequestConfig = {
            method: "GET",
            url: `/information`,
            params: {
                page: 0,
                size: 12
            }
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
                page?.content.map( info => {
                    return (
                        <div className="col-sm-6 col-lg-4 col-xl-3" key={info.id}>
                            <h1>{info.createdDate}</h1>
                        </div>
                    );
                })}
            </> 
            : <><h1>É necessário estar logado para verificar a dieta.</h1></>}
        </div>
    );
}

export default Diet;