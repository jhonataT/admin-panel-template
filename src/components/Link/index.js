
import './styles.css';

export const Link = ({ label, to, className, newPage }) => {
    return <a href={to} className={className || "link__container"} target={newPage && '_blank'}>
        {label}
    </a>
}
