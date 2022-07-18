import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import "./styles.css"

const Pagination = () => {

    return (
        <div className='pagination-container'>
            <ArrowIcon className="arrow-previous arrow-inactive"></ArrowIcon>
            <div className='pagination-item active'>1</div>
            <div className='pagination-item'>2</div>
            <div className='pagination-item'>3</div>
            <div className='pagination-item'>4</div>
            <div className='pagination-item'>5</div>
            <div className='pagination-item'>...</div>
            <div className='pagination-item'>35</div>
            <ArrowIcon className="arrow-next arrow-active"></ArrowIcon>
        </div>
    );
}

export default Pagination;