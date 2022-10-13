import { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";
import { User } from "types/user";
import { requestBackend } from "util/Requests";


type Props = { 
    user: User;
    onDelete: Function;
}

const UserCrudCard = ( { user, onDelete } : Props ) => {

    const handleDelete = (userId: number) => {
        if (!window.confirm("Excluir?")) {
            return;
        }

        const params : AxiosRequestConfig = {
            method: "DELETE",
            url: `/users/${userId}`,
            withCredentials: true
        };

        requestBackend(params).then(() => {
            onDelete();
        })
    }

    return (
        <div className="user-crud-container">
        <div className='base-card user-crud-card'>
            <div className='user-crud-card-top-container'>
            </div>
            <div className='user-crud-card-details'>
                <div className='user-crud-card-bottom-container'>
                    <h4>Nome: {user.name}</h4>
                    <h4>Email: {user.email}</h4>
                    <h4>Cpf: {user.cpf}</h4>
                    <h4>Telefone: {user.phone}</h4>
                    {user.roles.map((role) => {
                        return <h4> {role.authority} </h4>
                    })}
                </div>
            </div>
            <div className="user-crud-card-buttons-container">
                <button className="btn-outline-danger user-crud-card-button user-crud-card-button-delete" onClick={() => handleDelete(user.id)}>Delete</button>
                <Link to={`/admin/users/${user.id}`}>
                    <button className="btn-outline-secondary user-crud-card-button">Edit</button>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default UserCrudCard;