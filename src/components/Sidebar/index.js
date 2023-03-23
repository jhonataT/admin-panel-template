import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './styles.css';

export const CustomSidebar = () => {
    return <div className="sidebar__container">
      <Sidebar className="sidebar__content">
        <Menu>
          <SubMenu label="Usuários">
            <MenuItem>Lista</MenuItem>
            <MenuItem>Cadastro</MenuItem>
          </SubMenu>
          <MenuItem>Projetos</MenuItem>
        </Menu>
      </Sidebar>
    </div>
}