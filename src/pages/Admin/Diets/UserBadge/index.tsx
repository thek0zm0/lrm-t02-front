import './styles.css';

type Props = {
    email: string;
  };
  
  const UserBadge = ({ email }: Props) => {
    return <div className="diet-badge-container">{email}</div>;
  };
  
  export default UserBadge;