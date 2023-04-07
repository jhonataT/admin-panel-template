import { HomeScreen } from "../../screen/HomeScreen";

const links = [
    {
        title: 'jhonata-tenorio',
        to: 'https://www.linkedin.com/in/jhonata-tenorio/',
        icon: 'BsLinkedin'
    },
    {
        title: 'jhonataT',
        to: 'https://github.com/jhonataT',
        icon: 'BsGithub'
    },
    {
        title: 'jhonata-tenorio.com.br',
        to: 'https://www.jhonata-tenorio.com.br/',
        icon: 'BsCodeSlash'
    },
]

export const HomeContainer = () => {
    return <HomeScreen {...{links}}/>
}