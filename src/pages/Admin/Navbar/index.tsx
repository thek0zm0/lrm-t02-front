import './styles.css'

const navbar = () => {
    return (
        <nav className='admin-nav-container'>
            <ul>
                <li>
                    <a href="link" className='admin-nav-item active'>
                        <p>Alimentos</p>
                    </a>
                </li>
                <li>
                    <a href="link" className='admin-nav-item'>
                        <p>Dietas</p>
                    </a>
                </li>
                <li>
                    <a href="link" className='admin-nav-item'>
                        <p>Refeições</p>
                    </a>
                </li>
                <li>
                    <a href="link" className='admin-nav-item'>
                        <p>Usuários</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default navbar;