import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import Select from 'react-select';
import { Food } from "types/food";
import { Meal } from "types/meal";
import { requestBackend } from "util/Requests";

type UrlParams = {
    mealId: string;
}

const Form = () => {

    const { mealId } = useParams<UrlParams>();

    const isEditing = mealId !== 'create';

    const history = useHistory();

    const { register, handleSubmit, formState: { errors }, setValue, control } = useForm<Meal>();

    const [selectFoods, setSelectFoods] = useState<Food[]>([]);

    useEffect(() => {
        if (isEditing) {
            requestBackend({ url: `/meal/${mealId}` })
                .then((response) => {
                    const meal = response.data as Meal;
                    setValue('name', meal.name);
                    setValue('foods', meal.foods);
                });
        }
    }, [isEditing, mealId, setValue]);

    useEffect(() => {
        requestBackend({ url: '/food/all' }).then((response) => {
            setSelectFoods(response.data.content);
        });
      }, []);

    const onSubmit = (formData: Meal) => {

        const data = { ...formData }

        const params: AxiosRequestConfig = {
            method: isEditing ? "PUT" : "POST",
            url: isEditing ? `/meal/${mealId}` : `/meal/`,
            data,
            withCredentials: true
        };

        requestBackend(params)
            .then(response => {
                console.log(response.data);
                history.push('/admin/meals');
            });
        
        if (isEditing) {
            data.foods.forEach(food => {
                const insert: AxiosRequestConfig = {
                    method: "PUT",
                    url: `/meal/${mealId}/${food.id}`,
                    withCredentials: true
                };
        
                requestBackend(insert); 
            });
        }
    };

    const handleCancel = () => {
        history.push('/admin/meals');
    }

    return (
        <div className="meal-crud-container">
            <div className="base-card meal-crud-form-card">
                <h1 className="meal-crud-form-title">Informações do Alimento</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row meal-crud-inputs-container">
                        <div className='col-lg-6 meal-crud-inputs-left-container'>
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

                            <div className="margin-bottom-30 ">
                                <Controller
                                    name="foods"
                                    rules={{ required: true }}
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={selectFoods}
                                            classNamePrefix="product-crud-select"
                                            isMulti
                                            getOptionLabel={(food: Food) => food.name}
                                            getOptionValue={(category: Food) =>
                                                String(category.id)
                                            }
                                        />
                                    )}
                                />
                                {errors.foods && (
                                    <div className="invalid-feedback d-block">
                                        Campo obrigatório
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                    <div className='meal-crud-buttons-container'>
                        <button className="btn-outline-danger meal-crud-button" onClick={handleCancel}>Voltar</button>
                        <button className="btn-outline-primary meal-crud-button">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;