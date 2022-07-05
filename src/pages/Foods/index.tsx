import FoodCard from "components/FoodCard";

const Foods = () => {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <FoodCard></FoodCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <FoodCard></FoodCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <FoodCard></FoodCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <FoodCard></FoodCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <FoodCard></FoodCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <FoodCard></FoodCard>
                </div>
            </div>
        </div>
    );
}

export default Foods;