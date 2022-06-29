import { ReactComponent as MainImage } from 'assets/images/mainimage.svg';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from "components/Navbar";
import './styles.css'

const Home = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="home-container">
            <div className="home-card">
                <div className="home-content-container">
                    <h1>Comece agora uma vida mais saudável!</h1>
                    <p>Conheça a importância da escolha de alimentos saudáveis na sua dieta.</p>
                    <ButtonIcon></ButtonIcon>
                </div>
                <div className="home-image-container">
                    <MainImage></MainImage>
                </div>
            </div>
        </div>
        </>
    );
  }
  
  export default Home;