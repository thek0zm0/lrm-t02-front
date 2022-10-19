import { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { Information } from "types/information";
import { requestBackend } from 'util/Requests';
import CurrencyInput from 'react-currency-input-field';
import './styles.css';

type UrlParams = {
    informationId: string;
}

const Form = () => {

    const { informationId } = useParams<UrlParams>();

    const isEditing = informationId !== 'create';

    const history = useHistory();

    const { register, handleSubmit, formState: { errors }, setValue, control } = useForm<Information>();

    useEffect(() => {
        if (isEditing) {
            requestBackend({ url: `/information/${informationId}`})
            .then((response) => {
                const information = response.data as Information;
                setValue('height', information.height);
                setValue('weight', information.weight);
                setValue('sex', information.sex);
                setValue('activityStatus', information.activityStatus);
                setValue('basalMetabolicRate', information.basalMetabolicRate);
                setValue('userId', information.userId);
            });
        }
    }, [isEditing, informationId, setValue]);

    const onSubmit = (formData: Information) => {

        const data = {...formData, 
            height: String(formData.height).replace(',', '.'),
            weight: String(formData.weight).replace(',', '.')}

        const params: AxiosRequestConfig = {
            method: isEditing ? "PUT" : "POST",
            url: isEditing ? `/information/${informationId}` : `/information/`,
            data,
            withCredentials: true
        };

        requestBackend(params)
            .then(response => {
                console.log(response.data);
                history.push('/admin/informations');
            });
    };

    const handleCancel = () => {
        history.push('/admin/informations');
    }

    return (
        <div className="information-crud-container">
            <div className="base-card information-crud-form-card">
                <h1 className="information-crud-form-title">Informações Corporais do Usuário</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row information-crud-inputs-container">
                        <div className='col-lg-6 information-crud-inputs-left-container'>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="height"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='altura'
                                            className={`form-control base-input ${errors.height ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.height?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <Controller
                                    name="weight"
                                    rules={{required: 'Campo obrigatório'}}
                                    control={control}
                                    render={({ field }) => (
                                        <CurrencyInput
                                            placeholder='peso'
                                            className={`form-control base-input ${errors.weight ? 'is-invalid' : ''}`} 
                                            disableGroupSeparators={true}
                                            value={field.value}
                                            onValueChange={field.onChange}/>
                                    )}/>
                                <div className='invalid-feedback d-block'>{errors.weight?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <input 
                                    {...register("sex", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.sex ? 'is-invalid' : ''}`}
                                    placeholder="sexo"
                                    name="sex"
                                />
                                <div className='invalid-feedback d-block'>{errors.sex?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <input 
                                    {...register("activityStatus", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.activityStatus ? 'is-invalid' : ''}`}
                                    placeholder="grau de atividade"
                                    name="activityStatus"
                                />
                                <div className='invalid-feedback d-block'>{errors.activityStatus?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <input 
                                    {...register("userId", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.userId ? 'is-invalid' : ''}`}
                                    placeholder="id do usuário"
                                    name="userId"
                                />
                                <div className='invalid-feedback d-block'>{errors.userId?.message}</div>
                            </div>

                        </div>
                    </div>
                    <div className='information-crud-buttons-container'>
                        <button className="btn-outline-danger information-crud-button" onClick={handleCancel}>Voltar</button>
                        <button className="btn-outline-primary information-crud-button">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;