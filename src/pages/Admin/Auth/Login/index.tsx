import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ButtonIcon from 'components/ButtonIcon';
import './styles.css';
import { requestBackendLogin } from 'util/Requests';
import { useState, useContext } from 'react';
import { AuthContext } from 'AuthContext';
import { getAuthData, saveAuthData } from 'util/storage';
import { getTokenData } from 'util/auth';

type CredentialsDto = {
  username: string;
  password: string;
}

type LocationState = {
  from: string;
}
 
const Login = () => {

  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathName: '/admin'}};

  const { setAuthContextData } = useContext(AuthContext);

  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit, formState : {errors} } = useForm<CredentialsDto>();

  const history = useHistory();

  const onSubmit = (formData : CredentialsDto) => {
    requestBackendLogin(formData)
    .then(response => {
      saveAuthData(response.data);
      const token = getAuthData().access_token;
      console.log(token);
      setHasError(false);
      console.log(response);
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData()
      });
      history.replace(from);
    })
    .catch(error => {
      setHasError(true);
      console.log('Error: ', error);
    });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && 
      <div className='alert alert-danger'>
        Não foi possível realizar o login.
      </div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username", {
              required : 'Campo obrigatório',
              pattern : {
                value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message : 'Email inválido'
              }
            })}
            type="text"
            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
            placeholder="Email"
            name="username"
          />
          <div className='invalid-feedback d-block'>{errors.username?.message}</div>
        </div>
        <div className="mb-2">
          <input
            {...register("password", {
              required : 'Campo obrigatório'
            })}
            type="password"
            className={`form-control base-input ${errors.password? 'is-invalid' : ''}`}
            placeholder="Password"
            name="password"
          />
          <div className='invalid-feedback d-block'>{errors.password?.message}</div>
        </div>
        <Link to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha
        </Link>
        <div className="login-submit">
          <ButtonIcon text="Fazer login" />
        </div>
        <div className="signup-container">
          <span className="not-registered">Não tem Cadastro?</span>
          <Link to="/admin/auth/register" className="login-link-register">
            CADASTRAR
          </Link>
        </div>
      </form>
    </div>
  );
};
 
export default Login;