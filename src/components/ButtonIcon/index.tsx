import './styles.css'

import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

const ButtonIcon = () => {
    return (
        <div className="btn-container">
            <button className="btn btn-primary">
                <h6>Buscar Alimentos</h6>
            </button>
            <div className="btn-icon-container">
                <ArrowIcon></ArrowIcon>
            </div>
        </div>
    );
  }
  
  export default ButtonIcon;