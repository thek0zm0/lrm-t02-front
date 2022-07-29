import { ReactComponent as AuthImage } from 'assets/images/banner.svg'
import { Route, Switch } from 'react-router-dom';
import './styles.css';

const Auth = () => {

    return (
        <div className="auth-container">
            <div className="auth-banner-container">
                <h1>Sua dieta está na Healthy Foods</h1>
                <p>Encontre a melhor dieta para seus objetivos</p>
                <AuthImage></AuthImage>
            </div>
            <div className='auth-form-container'>
                <Switch>
                    <Route path="/admin/auth/login">
                        <h1>Login card</h1>
                    </Route>
                    <Route path="/admin/auth/signup">
                        <h1>Login signup</h1>
                    </Route>
                    <Route path="/admin/auth/recover">
                        <h1>Login recover</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Auth;