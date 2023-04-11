import { useNavigate } from "react-router-dom";
import { SubHeader } from "../../components/SubHeader";
import { DefaultTable } from "../../components/Table";
import { Card } from '../../components/Card';
import './styles.css';

export const ProjectsScreen = ({data}) => {
  const navigate = useNavigate()

  const buttons = [{
    title: 'Novo Projeto',
    onClick: () => navigate('/projects/new'),
    type: 'contained',
    color: "primary",
    fullWidth: false
  }]

  return <div className="projects__container">
    <Card style={{ padding: "0 0 20px 0" }}>
      <SubHeader {...{buttons}}/>
      <div className="table__container">
        <DefaultTable {...{data}} />
      </div>
    </Card>
  </div>
}