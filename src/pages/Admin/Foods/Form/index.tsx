import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Food } from 'types/food';
import { requestBackend } from 'util/Requests';
import './styles.css';

const Form = () => {

    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<Food>();

    const onSubmit = (formData: Food) => {

        const params: AxiosRequestConfig = {
            method: "POST",
            url: `/food/`,
            data: formData,
            withCredentials: true
        };

        requestBackend(params)
            .then(response => {
                console.log(response.data);
                history.push('/admin/foods');
            });
    };

    const handleCancel = () => {
        history.push('/admin/foods');
    }

    return (
        <div className="food-crud-container">
            <div className="base-card food-crud-form-card">
                <h1 className="food-crud-form-title">Informações do Alimento</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row food-crud-inputs-container">
                        <div className='col-lg-6 food-crud-inputs-left-container'>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("name", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Nome do Alimento"
                                    name="name"
                                />
                                <div className='invalid-feedback d-block'>{errors.name?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("foodGroup", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.foodGroup ? 'is-invalid' : ''}`}
                                    placeholder="Grupo do Alimento"
                                    name="foodGroup"
                                />
                                <div className='invalid-feedback d-block'>{errors.foodGroup?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("quantity", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.quantity ? 'is-invalid' : ''}`}
                                    placeholder="Quantidade"
                                    name="quantity"
                                />
                                <div className='invalid-feedback d-block'>{errors.quantity?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("calorie", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.calorie ? 'is-invalid' : ''}`}
                                    placeholder="Calorias"
                                    name="calorie"
                                />
                                <div className='invalid-feedback d-block'>{errors.calorie?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("protein", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.protein ? 'is-invalid' : ''}`}
                                    placeholder="Proteínas"
                                    name="protein"
                                />
                                <div className='invalid-feedback d-block'>{errors.protein?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("carbohydrate", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.carbohydrate ? 'is-invalid' : ''}`}
                                    placeholder="Carboidratos"
                                    name="carbohydrate"
                                />
                                <div className='invalid-feedback d-block'>{errors.carbohydrate?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("fat", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.fat ? 'is-invalid' : ''}`}
                                    placeholder="Gorduras"
                                    name="fat"
                                />
                                <div className='invalid-feedback d-block'>{errors.fat?.message}</div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("sodium", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.sodium ? 'is-invalid' : ''}`}
                                    placeholder="Sódio"
                                    name="sodium"
                                />
                                <div className='invalid-feedback d-block'>{errors.sodium?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("sugar", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.sugar ? 'is-invalid' : ''}`}
                                    placeholder="Açúcar"
                                    name="sugar"
                                />
                                <div className='invalid-feedback d-block'>{errors.sugar?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("vitaminA", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.vitaminA ? 'is-invalid' : ''}`}
                                    placeholder="Vitamina A"
                                    name="vitaminA"
                                />
                                <div className='invalid-feedback d-block'>{errors.vitaminA?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("vitaminC", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.vitaminC ? 'is-invalid' : ''}`}
                                    placeholder="Vitamina C"
                                    name="vitaminC"
                                />
                                <div className='invalid-feedback d-block'>{errors.vitaminC?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("iron", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.iron ? 'is-invalid' : ''}`}
                                    placeholder="Ferro"
                                    name="iron"
                                />
                                <div className='invalid-feedback d-block'>{errors.iron?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input 
                                    {...register("imgUrl", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.imgUrl ? 'is-invalid' : ''}`}
                                    placeholder="Url da Imagem"
                                    name="imgUrl"
                                />
                                <div className='invalid-feedback d-block'>{errors.imgUrl?.message}</div>
                            </div>
                        </div>
                    </div>
                    <div className='food-crud-buttons-container'>
                        <button className="btn-outline-danger food-crud-button" onClick={handleCancel}>Voltar</button>
                        <button className="btn-outline-primary food-crud-button">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;