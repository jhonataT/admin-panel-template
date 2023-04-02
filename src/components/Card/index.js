import { IoArrowBack } from 'react-icons/io5';
import './styles.css';

const CardContainer = ({ children, size, ...props }) => (
    <div className={"card__container " + `${size === 'sm' ? 'sm' : ''}`}>
        {children}
    </div>
)

export const Card = ({ children, hasHeader, goToBack, size, ...props }) => {
    if(hasHeader) {
        return <CardContainer {...{size}} {...props}>
            <header>
                <a className="header__back" href={goToBack}><IoArrowBack/></a>
            </header>
            {children}
        </CardContainer>
    }

    return <CardContainer {...{size}}>{children}</CardContainer>
}