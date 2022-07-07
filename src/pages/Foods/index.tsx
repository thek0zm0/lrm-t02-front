import FoodCard from "components/FoodCard";
import { Link } from "react-router-dom";
import { Food } from "types/food";

const Foods = () => {

    const food : Food = {
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
        <div className="container my-4">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to ="/foods/1">
                        <FoodCard food={food}></FoodCard>
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to ="/foods/1">
                        <FoodCard food={food}></FoodCard>
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to ="/foods/1">
                        <FoodCard food={food}></FoodCard>
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to ="/foods/1">
                        <FoodCard food={food}></FoodCard>
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to ="/foods/1">
                        <FoodCard food={food}></FoodCard>
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to ="/foods/1">
                        <FoodCard food={food}></FoodCard>
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to ="/foods/1">
                        <FoodCard food={food}></FoodCard>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Foods;