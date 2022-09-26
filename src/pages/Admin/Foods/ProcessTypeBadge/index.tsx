import './styles.css';

type Props = {
    name: string;
}

const ProcessTypeBadge = ({name} : Props) => {
    return (
        <div className="food-badge-container">
            {name}
        </div>
    )
}

export default ProcessTypeBadge;