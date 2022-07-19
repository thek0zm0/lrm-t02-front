import { NavLink } from 'react-router-dom';
import './styles.css'

const navbar = () => {
    return (
        <nav className='admin-nav-container'>
            <ul>
                <li>
                    <NavLink to="/admin/foods" className='admin-nav-item'>
                        <p>Alimentos</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/diets" className='admin-nav-item'>
                        <p>Dietas</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/meals" className='admin-nav-item'>
                        <p>Refeições</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/users" className='admin-nav-item'>
                        <p>Usuários</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default navbar;