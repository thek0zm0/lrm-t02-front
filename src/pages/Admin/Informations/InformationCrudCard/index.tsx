import { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";
import { Information } from "types/information";
import { requestBackend } from "util/Requests";
import './styles.css';

type Props = { 
    information: Information;
    onDelete: Function;
}

const InformationCrudCard = ( { information, onDelete } : Props ) => {

    const handleDelete = (informationId: number) => {
        if (!window.confirm("Excluir?")) {
            return;
        }

        const params : AxiosRequestConfig = {
            method: "DELETE",
            url: `/information/${informationId}`,
            withCredentials: true
        };

        requestBackend(params).then(() => {
            onDelete();
        })
    }

    return (
        <div className="information-crud-container">
        <div className='base-card information-crud-card'>
            <div className='information-crud-card-top-container'>
            </div>
            <div className='information-crud-card-details'>
                <div className='information-crud-card-bottom-container'>
                    <h4>Id do usuário: {information.userId}</h4>
                    <h4>Altura: {information.height}</h4>
                    <h4>Peso: {information.weight}</h4>
                    <h4>Idade: {information.age}</h4>
                    <h4>Grau de Atividade: {information.activityStatus}</h4>
                    <h4>Data Cadastro: {information.createdDate}</h4>
                    <h4>Taxa metabólica: {information.basalMetabolicRate}</h4>
                </div>
            </div>
            <div className="information-crud-card-buttons-container">
                <button className="btn-outline-danger information-crud-card-button information-crud-card-button-delete" onClick={() => handleDelete(information.id)}>Delete</button>
                <Link to={`/admin/informations/${information.id}`}>
                    <button className="btn-outline-secondary information-crud-card-button">Edit</button>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default InformationCrudCard;