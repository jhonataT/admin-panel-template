import * as Icons from "react-icons/bs";
import { Typography } from "@mui/material";
import { Player } from '@lottiefiles/react-lottie-player';
import { Card } from "../../components/Card";
import { Link } from "../../components/Link";
import { KpiCards } from "../../components/KpiCards";
import homeLottie from '../../assets/lotties/home.json';
import kpiData from '../../core/mocks/MOCK_KPI_USER.json';
import './styles.css';

export const HomeScreen = ({ links }) => {
  return <div>
    <KpiCards data={kpiData}/>
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
                <IconComponent size={24} color="var(--chart-color)"/>
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