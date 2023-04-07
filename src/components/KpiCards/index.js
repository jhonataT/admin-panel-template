import * as Icons from "react-icons/hi";
import data from '../../core/mocks/MOCK_KPI_USER.json';
import './styles.css';

export const KpiCards = () => {
    return <div className="kpi__container">
        {
            Array.isArray(data) && data.map( kpi => {
                const ComponentIcon = Icons[kpi?.icon] || Icons.HiBadgeCheck

                return <div
                    className="kpi_card"
                    style={{background: kpi?.backgroundColor}}
                >
                    <div className="kpi_card__content">
                        <span className="content__icon">
                            <ComponentIcon />
                        </span>
                        <span className="content__title">
                            <span>{kpi?.title || ""}</span>
                            <span>{kpi?.value || 0}</span>
                        </span>
                    </div>
                </div>
            })
        }
    </div>
}