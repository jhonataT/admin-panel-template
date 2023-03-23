import { DefaultButton } from '../../components/Button';
import { Card } from '../../components/Card';
import { ImageContent } from '../../components/Image';
import { DefaultInput } from '../../components/Input';
import logo from '../../assets/images/login-image.jpg';
import './styles.css';

export const RecoveryScreen = () => {
    return <main className="recovery__container">
    <Card hasHeader goToBack="/authentication/login">
        <div className="login__content">
            <ImageContent imgSrc={logo}/>
            <h3>Recuperar acesso</h3>
            <DefaultInput 
                label="Email"
                placeholder="Digite o seu email"
                handleChange={(value) => console.log(value)}
            />
            <DefaultInput 
                label="Cofirmar Email"
                placeholder="confirme o seu email"
                handleChange={(value) => console.log(value)}
            />
            <DefaultButton label="Solicitar nova senha" handleClick={() => console.log("RECUPERAR")} />
        </div>
    </Card>
</main>
}