
type Props = {
    name: string;
  };
  
  const MealBadge = ({ name }: Props) => {
    return <div className="meal-badge-container">{name}</div>;
  };
  
  export default MealBadge;