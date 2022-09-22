import { ReactComponent as MainImage } from 'assets/images/mainimage.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                    <div>
                        <h1>Comece agora uma vida mais saudável!</h1>
                        <p>Conheça a importância da escolha de alimentos saudáveis na sua dieta.</p>
                    </div>
                    <div>
                        <Link to="/foods">
                            <ButtonIcon text="Buscar Alimento"></ButtonIcon>
                        </Link>
                    </div>
                </div>
                <div className="home-image-container">
                    <MainImage></MainImage>
                </div>
            </div>
        </div>
    );
  }
  
  export default Home;