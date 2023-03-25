import { DefaultInput } from "../../components/Input";
import logo from '../../assets/images/login-image.jpg';
import { ImageContent } from "../../components/Image";
import { Link } from "../../components/Link";
import { DefaultButton } from "../../components/Button";
import { Card } from "../../components/Card";
import './styles.css';

export const LoginScreen = () => {
    return <main className="login__container">
        {/* <Card> */}
            <div className="login__content">
                <ImageContent imgSrc={logo}/>
                <h3>LOGIN</h3>
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
                <DefaultButton label="Entrar" handleClick={() => console.log("LOGIN")} />
                <Link
                    label="Esqueci a minha senha"
                    to="/authentication/recovery"
                />
            </div>
        {/* </Card> */}
    </main>
}