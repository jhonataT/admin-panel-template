import { useNavigate } from "react-router-dom"
import { NewProjectsScreen } from "../../screen/NewProjectsScreen"

export const NewProjectsContainer = () => {
  const navigate = useNavigate()

  const cancelButton = () => navigate("/projects")

  return <NewProjectsScreen {...{cancelButton}}/>
}