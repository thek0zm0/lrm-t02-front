import './styles.css';

const Form = () => {

    return (
        <div className="food-crud-container">
            <div className="base-card food-crud-form-card">
                <h1 className="food-crud-form-title">Informações do Alimento</h1>
                <form action=''>
                    <div className="row">
                        <div className='col-lg-6'>
                            <input className="base-input form-control"></input>
                            <input className="base-input form-control"></input>
                            <input className="base-input form-control"></input>
                        </div>
                        <div className='col-lg-6'>
                            <textarea name='' rows={10} className="base-input form-control"></textarea>
                        </div>
                    </div>
                        <button className="btn-outline-danger">Voltar</button>
                        <button className="btn-outline-primary">Salvar</button>
                </form>
            </div>
        </div>
    )
}

export default Form;