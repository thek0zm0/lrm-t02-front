import './styles.css';

type Props = {
    name: string;
  };
  
  const MealBadge = ({ name }: Props) => {
    return <div className="diet-badge-container">{name}</div>;
  };
  
  export default MealBadge;