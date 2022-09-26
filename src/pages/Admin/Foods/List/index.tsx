import FoodCrudCard from "pages/Admin/Foods/FoodCrudCard";
import { Link } from "react-router-dom";
import './styles.css';

const List = () => {

    const food = {
            "id": 1,
            "name": "Banana",
            "foodGroup": "INNATURA",
            "imgUrl": "https://img.freepik.com/fotos-gratis/bando-de-banana-isolado_88281-1027.jpg?w=360",
            "quantity": 100,
            "calorie": 98.3,
            "protein": 1.3,
            "carbohydrate": 26.0,
            "fat": 0.0,
            "sodium": 0.0,
            "sugar": 0.0,
            "vitaminA": 0.0,
            "vitaminC": 21.6,
            "iron": 0.4
    }

    return (
        <>
            <div className="food-crud-bar-container">
                <Link to="/admin/foods/create">
                    <button className="btn btn-primary text-white btn-crud-add">Adicionar</button>
                </Link>
            <div className="base-card food-filter-container">Barra de busca</div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-12">
                    <FoodCrudCard food={food}></FoodCrudCard>
                </div>
                <div className="col-sm-6 col-md-12">
                    <FoodCrudCard food={food}></FoodCrudCard>
                </div>
                <div className="col-sm-6 col-md-12">
                    <FoodCrudCard food={food}></FoodCrudCard>
                </div>
            </div>
        </>
    )
}

export default List;