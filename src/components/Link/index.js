
import './styles.css';

export const Link = ({ label, to }) => {
    return <a href={to} className="link__container">
        {label}
    </a>
}
