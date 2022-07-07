import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const FoodDetails = () => {
    return (
        <div className="food-details-page-container">
            <div className="base-card food-details-card">
                <Link to="/foods">
                    <div className="goback-container">
                        <ArrowIcon></ArrowIcon>
                        <h2>Go Back</h2>
                    </div>
                </Link>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src="https://img.freepik.com/fotos-gratis/bando-de-banana-isolado_88281-1027.jpg?w=360" alt="Nome do alimento" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="details-container">
                            <h2>Detalhes</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, nihil? Necessitatibus natus quaerat cupiditate distinctio unde libero error vero praesentium sunt, ea laudantium fuga, sequi dolore consequuntur, repellat nam facilis?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodDetails;