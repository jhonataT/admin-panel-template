import { Typography } from "@mui/material";
import { Player } from '@lottiefiles/react-lottie-player';
import { Card } from "../../components/Card";
import { BsGithub, BsLinkedin, BsCodeSlash } from 'react-icons/bs';
import homeLottie from '../../assets/lotties/home.json';
import './styles.css';

export const HomeScreen = () => {
    return <div>
        <Card>
            <div className="home-card__container">
                <div className="lottie__container">
                    <Player
                        autoplay
                        loop
                        src={homeLottie}
                        style={{ height: '300px', width: '300px' }}
                    />
                </div>
                <Typography variant="h6" className="links__container">
                    <div className="link__content">
                        <BsLinkedin size={24} />
                        <a href="https://www.linkedin.com/in/jhonata-tenorio/" target="__blank">
                            jhonata-tenorio
                        </a>
                    </div>
                    <div className="link__content">
                        <BsGithub size={24} /> 
                        <a href="https://github.com/jhonataT" target="__blank">
                            jhonataT
                        </a>
                    </div>
                    <div className="link__content">
                        <BsCodeSlash size={24} /> 
                        <a href="https://www.jhonata-tenorio.com.br/" target="__blank">
                            jhonata-tenorio.com.br
                        </a>
                    </div>
                </Typography>
            </div>
        </Card>
    </div>
}