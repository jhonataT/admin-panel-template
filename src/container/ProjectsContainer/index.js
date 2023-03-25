import { ProjectsScreen } from "../../screen/ProjectsScreen"
import MOCK_PROJECTS_DATA from "../..//core/mocks/MOCK_PROJECTS_DATA.json"


export const ProjectsContainer = () => {
  return <ProjectsScreen data={MOCK_PROJECTS_DATA} />
}