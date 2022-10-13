import { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "types/user";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/Requests";
import UserCrudCard from "../UserCrudCard";



const List = () => {

    const [page, setPage] = useState<SpringPage<User>>();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        const params : AxiosRequestConfig = {
            url: '/users',
            withCredentials: true,
            params: {
              page: 0,
              size: 12,
            },
        };

        requestBackend(params)
            .then(response => {
                setPage(response.data);
            });
    }

    return (
        <>
            <div className="user-crud-bar-container">
                <Link to="/admin/users/create">
                    <button className="btn btn-primary text-white btn-crud-add">Adicionar</button>
                </Link>
                <div className="base-card user-filter-container">Barra de busca</div>
            </div>
            <div className="row">
                {page?.content.map(user => (
                    <div key={user.id} className="col-sm-6 col-md-12">
                        <UserCrudCard user={user} onDelete={() => getUsers()}></UserCrudCard>
                    </div>
                ))}
            </div>
        </>
    )
}

export default List;