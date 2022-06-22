import { ReactComponent as MainImage } from 'assets/images/mainimage.svg';
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