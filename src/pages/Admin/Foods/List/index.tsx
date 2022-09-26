import FoodCrudCard from "components/FoodCrudCard";

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
        <div>
            <button className="btn btn-primary text-white">Adicionar</button>
            <div>Barra de busca</div>
            <FoodCrudCard food={food}></FoodCrudCard>
            <FoodCrudCard food={food}></FoodCrudCard>
            <FoodCrudCard food={food}></FoodCrudCard>
        </div>
    )
}

export default List;