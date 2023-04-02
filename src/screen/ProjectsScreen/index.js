import { useNavigate } from "react-router-dom"
import { SubHeader } from "../../components/SubHeader"
import { DefaultTable } from "../../components/Table"
import './styles.css'

export const ProjectsScreen = ({data}) => {
  const navigate = useNavigate()

  const buttons = [
    {
      title: 'Novo Projeto',
      onClick: () => navigate('/projects/new'),
      type: 'contained',
      color: "primary",
      fullWidth: false
    }
  ]
  return <div className="projects__container">
    <SubHeader {...{buttons}}/>
    <DefaultTable {...{data}} />
  </div>
}