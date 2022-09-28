import './styles.css';

const Form = () => {

    return (
        <div className="food-crud-container">
            <div className="base-card food-crud-form-card">
                <h1 className="food-crud-form-title">Informações do Alimento</h1>
                <form action=''>
                    <div className="row food-crud-inputs-container">
                        <div className='col-lg-6 food-crud-inputs-left-container'>
                            <div className='margin-botton-30'>
                                <input className="base-input form-control"></input>
                            </div>
                            <div className='margin-botton-30'>
                                <input className="base-input form-control"></input>
                            </div>
                            <div className='margin-botton-30'>
                                <input className="base-input form-control"></input>
                            </div>
                            <div>
                                <input className="base-input form-control"></input>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div>
                                <textarea name='' rows={10} className="base-input form-control h-auto"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='food-crud-buttons-container'>
                        <button className="btn-outline-danger food-crud-button">Voltar</button>
                        <button className="btn-outline-primary food-crud-button">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;