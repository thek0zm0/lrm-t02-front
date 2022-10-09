type Props = {
    name: string;
  };
  
  const FoodBadge = ({ name }: Props) => {
    return <div className="food-badge-container">{name}</div>;
  };
  
  export default FoodBadge;