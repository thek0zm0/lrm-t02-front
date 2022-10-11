
type Props = {
    email: string;
  };
  
  const UserBadge = ({ email }: Props) => {
    return <div className="user-badge-container">{email}</div>;
  };
  
  export default UserBadge;