import { IoArrowBack } from 'react-icons/io5';
import './styles.css';

const CardContainer = ({ children, size, style, ...props }) => (
    <div className={"card__container " + `${size === 'sm' ? 'sm' : ''}`} style={style}>
        {children}
    </div>
)

export const Card = ({ children, style, hasHeader, goToBack, size, ...props }) => {
    if(hasHeader) {
        return <CardContainer {...{size, style}} {...props}>
            <header>
                <a className="header__back" href={goToBack}><IoArrowBack/></a>
            </header>
            {children}
        </CardContainer>
    }

    return <CardContainer {...{size, style}} {...props} >{children}</CardContainer>
}