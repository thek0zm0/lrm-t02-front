import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { Food } from 'types/food';
import { requestBackend } from 'util/Requests';
import './styles.css';

type UrlParams = {
    foodId: string;
}

const Form = () => {

    const { foodId } = useParams<UrlParams>();

    const isEditing = foodId !== 'create';

    const history = useHistory();

    const { register, handleSubmit, formState: { errors }, setValue, control } = useForm<Food>();

    useEffect(() => {
        if (isEditing) {
            requestBackend({ url: `/food/${foodId}`})
            .then((response) => {
                const food = response.data as Food;
                setValue('name', food.name);
                setValue('foodGroup', food.foodGroup);
                setValue('quantity', food.quantity);
                setValue('calorie', food.calorie);
                setValue('protein', food.protein);
                setValue('carbohydrate', food.carbohydrate);
                setValue('fat', food.fat);
                setValue('sodium', food.sodium);
                setValue('sugar', food.sugar);
                setValue('vitaminA', food.vitaminA);
                setValue('vitaminC', food.vitaminC);
                setValue('iron', food.iron);
                setValue('imgUrl', food.imgUrl);
            });
        }
    }, [isEditing, foodId, setValue]);

    const onSubmit = (formData: Food) => {

        const data = {...formData, 
            quantity: String(formData.quantity).replace(',', '.'),
            calorie: String(formData.calorie).replace(',', '.'),
            protein: String(formData.protein).replace(',', '.'),
            carbohydrate: String(formData.carbohydrate).replace(',', '.'),
            fat: String(formData.fat).replace(',', '.'),
            sodium: String(formData.sodium).replace(',', '.'),
            sugar: String(formData.sugar).replace(',', '.'),
            vitaminAon: String(formData.vitaminA).replace(',', '.'),
            vitaminC: String(formData.vitaminC).replace(',', '.'),
            iron: String(formData.iron).replace(',', '.')}

        const params: AxiosRequestConfig = {
            method: isEditing ? "PUT" : "POST",
            url: isEditing ? `/food/${foodId}` : `/food/`,
            data,
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
                                <Controller
                                    name="quantity"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='quantidade'
                                            className={`form-control base-input ${errors.quantity ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            decimalScale={0}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.quantity?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="calorie"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='caloria'
                                            className={`form-control base-input ${errors.calorie ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.calorie?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="protein"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='proteína'
                                            className={`form-control base-input ${errors.protein ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.protein?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="carbohydrate"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='carboidratos'
                                            className={`form-control base-input ${errors.carbohydrate ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.carbohydrate?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="fat"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='gorduras'
                                            className={`form-control base-input ${errors.fat ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.fat?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="sodium"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='sódio'
                                            className={`form-control base-input ${errors.sodium ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.sodium?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="sugar"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='açúcar'
                                            className={`form-control base-input ${errors.sugar ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.sugar?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="vitaminA"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='vitamina A'
                                            className={`form-control base-input ${errors.vitaminA ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.vitaminA?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="vitaminC"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='vitamina C'
                                            className={`form-control base-input ${errors.vitaminC ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.vitaminC?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="iron"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='Ferro'
                                            className={`form-control base-input ${errors.iron ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
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