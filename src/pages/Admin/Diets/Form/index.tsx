import { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import Select from 'react-select';
import { Diet } from "types/diet";
import { Meal } from "types/meal";
import { User } from "types/user";
import { requestBackend } from "util/Requests";
import './styles.css';

type UrlParams = {
    dietId: string;
}

const Form = () => {

    const { dietId } = useParams<UrlParams>();

    const isEditing = dietId !== 'create';

    const history = useHistory();

    const { register, handleSubmit, formState: { errors }, setValue, control } = useForm<Diet>();

    const [selectUsers, setSelectUsers] = useState<User[]>([]);

    const [selectMeals, setSelectMeals] = useState<Meal[]>([]);

    useEffect(() => {
        if (isEditing) {
            requestBackend({ url: `/diet/${dietId}`, withCredentials: true })
                .then((response) => {
                    const diet = response.data as Diet;
                    setValue('name', diet.name);
                    setValue('description', diet.description);
                    setValue('users', diet.users);
                    setValue('meals', diet.meals);
                });
        }
    }, [isEditing, dietId, setValue]);

    useEffect(() => {
        requestBackend({ url: '/meal/all' }).then((response) => {
            setSelectMeals(response.data.content);
        });
        requestBackend({ url: '/users', withCredentials : true }).then((response) => {
            setSelectUsers(response.data.content);
        });
    }, []);

    const onSubmit = (formData: Diet) => {

        const data = { ...formData }

        const params: AxiosRequestConfig = {
            method: isEditing ? "PUT" : "POST",
            url: isEditing ? `/diet/${dietId}` : `/diet/`,
            data,
            withCredentials: true
        };

        requestBackend(params)
            .then(response => {
                console.log(response.data);
                history.push('/admin/diets');
            });

        if (isEditing) {
            data.meals.forEach(meal => {
                const insert: AxiosRequestConfig = {
                    method: "PUT",
                    url: `/diet/insert-meal/${dietId}/${meal.id}`,
                    withCredentials: true
                };

                requestBackend(insert);
            });
            data.users.forEach(user => {
                const insert: AxiosRequestConfig = {
                    method: "PUT",
                    url: `/diet/insert-user/${dietId}/${user.id}`,
                    withCredentials: true
                };

                requestBackend(insert);
            });
        }
    };

    const handleCancel = () => {
        history.push('/admin/diets');
    }

    return (
        <div className="diet-crud-container">
            <div className="base-card diet-crud-form-card">
                <h1 className="diet-crud-form-title">Informações da Dieta</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row diet-crud-inputs-container">
                        <div className='col-lg-6 diet-crud-inputs-left-container'>
                            <div className='margin-botton-30'>
                                <input
                                    {...register("name", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Nome da Dieta"
                                    name="name"
                                />
                                <div className='invalid-feedback d-block'>{errors.name?.message}</div>
                            </div>
                            <div className='margin-botton-30'>
                                <input
                                    {...register("description", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.description ? 'is-invalid' : ''}`}
                                    placeholder="Descrição da Dieta"
                                    name="description"
                                />
                                <div className='invalid-feedback d-block'>{errors.description?.message}</div>
                            </div>
                            <div className="margin-bottom-30 ">
                                <Controller
                                    name="meals"
                                    rules={{ required: true }}
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={selectMeals}
                                            classNamePrefix="product-crud-select"
                                            isMulti
                                            getOptionLabel={(meal: Meal) => meal.name}
                                            getOptionValue={(meal: Meal) =>
                                                String(meal.id)
                                            }
                                        />
                                    )}
                                />
                                {errors.meals && (
                                    <div className="invalid-feedback d-block">
                                        Campo obrigatório
                                    </div>
                                )}
                            </div>
                            <div className="margin-bottom-30 ">
                                <Controller
                                    name="users"
                                    rules={{ required: true }}
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={selectUsers}
                                            classNamePrefix="product-crud-select"
                                            isMulti
                                            getOptionLabel={(users: User) => users.name}
                                            getOptionValue={(users: User) =>
                                                String(users.id)
                                            }
                                        />
                                    )}
                                />
                                {errors.users && (
                                    <div className="invalid-feedback d-block">
                                        Campo obrigatório
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='diet-crud-buttons-container'>
                        <button className="btn-outline-danger diet-crud-button" onClick={handleCancel}>Voltar</button>
                        <button className="btn-outline-primary diet-crud-button">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;