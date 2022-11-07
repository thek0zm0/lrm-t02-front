import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { Role } from "types/role";
import { User } from "types/user";
import { requestBackend } from "util/Requests";
import Select from 'react-select';
import './styles.css';

type UrlParams = {
    userId: string;
}

const Form = () => {

    const { userId } = useParams<UrlParams>();

    const isEditing = userId !== 'create';

    const history = useHistory();

    const { register, handleSubmit, formState: { errors }, setValue, control } = useForm<User>();

    const [selectRoles, setSelectRoles] = useState<Role[]>([]);

    useEffect(() => {
        if (isEditing) {
            requestBackend({ url: `/users/${userId}`, withCredentials : true})
            .then((response) => {
                const user = response.data as User;
                setValue('name', user.name);
                setValue('email', user.email);
                setValue('cpf', user.cpf);
                setValue('phone', user.phone);
                setValue('birthDate', user.birthDate);
                setValue('password', user.password);
                setValue('roles', user.roles);
            });
        }
    }, [isEditing, userId, setValue]);

    useEffect(() => {
        requestBackend({ url: '/role/all', withCredentials : true}).then((response) => {
            setSelectRoles(response.data.content);
        });
      }, []);

    const onSubmit = (formData: User) => {

        const data = {...formData}

        const params: AxiosRequestConfig = {
            method: isEditing ? "PUT" : "POST",
            url: isEditing ? `/users/${userId}` : `/users/`,
            data,
            withCredentials: true
        };

        requestBackend(params)
            .then(response => {
                console.log(response.data);
                history.push('/admin/users');
            });
    };

    const handleCancel = () => {
        history.push('/admin/users');
    }

    return (
        <div className="user-crud-container">
            <div className="base-card user-crud-form-card">
                <h1 className="user-crud-form-title">Informações do Usuário</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row user-crud-inputs-container">
                        <div className='col-lg-6 user-crud-inputs-left-container'>

                            <div className='margin-botton-30'>
                                <input 
                                    {...register("name", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Nome do Usuário"
                                    name="name"
                                />
                                <div className='invalid-feedback d-block'>{errors.name?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <input 
                                    {...register("email", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="Email do Usuário"
                                    name="email"
                                />
                                <div className='invalid-feedback d-block'>{errors.email?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <input 
                                    {...register("cpf", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.cpf ? 'is-invalid' : ''}`}
                                    placeholder="Cpf do Usuário"
                                    name="cpf"
                                />
                                <div className='invalid-feedback d-block'>{errors.cpf?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <input 
                                    {...register("phone", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.phone ? 'is-invalid' : ''}`}
                                    placeholder="Telefone do Usuário"
                                    name="phone"
                                />
                                <div className='invalid-feedback d-block'>{errors.phone?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <input 
                                    {...register("birthDate", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.birthDate ? 'is-invalid' : ''}`}
                                    placeholder="Nascimento do Usuário"
                                    name="birthDate"
                                />
                                <div className='invalid-feedback d-block'>{errors.birthDate?.message}</div>
                            </div>

                            <div className='margin-botton-30'>
                                <input 
                                    {...register("password", {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Senha do Usuário"
                                    name="password"
                                />
                                <div className='invalid-feedback d-block'>{errors.password?.message}</div>
                            </div>

                            <div className="margin-bottom-30 ">
                                <Controller
                                    name="roles"
                                    rules={{ required: true }}
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={selectRoles}
                                            classNamePrefix="product-crud-select"
                                            isMulti
                                            getOptionLabel={(role: Role) => role.authority}
                                            getOptionValue={(role: Role) =>
                                                String(role.id)
                                            }
                                        />
                                    )}
                                />
                                {errors.roles && (
                                    <div className="invalid-feedback d-block">
                                        Campo obrigatório
                                    </div>
                                )}
                            </div>
                            
                        </div>
                    </div>
                    <div className='user-crud-buttons-container'>
                        <button className="btn-outline-danger user-crud-button" onClick={handleCancel}>Voltar</button>
                        <button className="btn-outline-primary user-crud-button">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;