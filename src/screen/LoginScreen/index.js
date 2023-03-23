import { DefaultInput } from "../../components/Input";
import logo from '../../assets/images/login-image.jpg';
import { ImageContent } from "../../components/Image";
import './styles.css';

export const LoginScreen = () => {
    return <main className="login__container">
        <div className="login__content">
            <ImageContent imgSrc={logo}/>
            <h3>FAÇA O LOGIN</h3>
            <DefaultInput 
                label="Email"
                placeholder="Digite o seu email"
                handleChange={(value) => console.log(value)}
            />
            <DefaultInput 
                label="Senha"
                placeholder="Digite a sua senha"
                handleChange={(value) => console.log(value)}
                type="password"
            />
            <a href="/authentication/recovery">Esqueci a minha senha</a>
        </div>
    </main>
}