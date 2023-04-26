import { ProjectsScreen } from "../../screen/ProjectsScreen"
import { useEffect, useState } from "react";
import { Api } from "../../core/communication";

export const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Api().get('/api/projects')
    .then(response => setProjects(response?.data || []));
  }, [])

  return <ProjectsScreen data={projects || []} />
}