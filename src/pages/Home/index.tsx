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
                    <Link to="/foods">
                        <ButtonIcon></ButtonIcon>
                    </Link>
                </div>
                <div className="home-image-container">
                    <MainImage></MainImage>
                </div>
            </div>
        </div>
    );
  }
  
  export default Home;