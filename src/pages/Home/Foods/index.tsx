import FoodCard from "components/FoodCard";
import Navbar from "components/Navbar";

const Foods = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="container my-4">
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
        </div>
        </>
    );
}

export default Foods;