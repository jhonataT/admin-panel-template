import { DefaultButton } from '../Button';
import './styles.css';

export const SubHeader = ({ buttons }) => {
    return <header className="sub-header__container">
        <div className="sub-header__content">
            {
                Array.isArray(buttons) && buttons.map(button => (
                    <DefaultButton
                        key={button?.title}
                        disabled={button?.disabled}
                        label={button.title}
                        handleClick={button.onClick}
                        type={button.type}
                        color={button.color}
                        fullWidth={button.fullWidth}
                    />
                )) 
            }
        </div>
    </header>
}