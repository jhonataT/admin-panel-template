import * as Icons from "react-icons/bs";
import { Typography } from "@mui/material";
import { Player } from '@lottiefiles/react-lottie-player';
import { Card } from "../../components/Card";
import { Link } from "../../components/Link";
import homeLottie from '../../assets/lotties/home.json';
import './styles.css';
import { KpiCards } from "../../components/KpiCards";

export const HomeScreen = ({ links }) => {
  return <div>
    <KpiCards />
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
          {
            Array.isArray(links) && links.map(link => {
              const IconComponent = Icons[link?.icon] || Icons["BsCodeSlash"];

              return <div className="link__content">
                <IconComponent size={24} />
                <Link
                  label={link?.title}
                  to={link?.to}
                  key={link?.title}
                  newPage
                />
              </div>
            })
          }
        </Typography>
      </div>
    </Card>
    <br/>
  </div>
}