import './styles.css';

type Props = {
    name: string;
  };
  
  const FoodBadge = ({ name }: Props) => {
    return <div className="meal-badge-container">{name}</div>;
  };
  
  export default FoodBadge;