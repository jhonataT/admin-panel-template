import { IoArrowBack } from 'react-icons/io5';
import './styles.css';

const CardContainer = ({ children }) => (
    <div className="card__container">{children}</div>
)

export const Card = ({ children, hasHeader, goToBack, ...props }) => {
    // console.log("PROPS", props);
    if(hasHeader) {
        return <CardContainer>
            <header>
                <a className="header__back" href={goToBack}><IoArrowBack/></a>
            </header>
            {children}
        </CardContainer>
    }
    return <CardContainer>{children}</CardContainer>
}