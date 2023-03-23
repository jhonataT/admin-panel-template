import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { itemList } from '../../routes'; 
import { Link } from 'react-router-dom';
import './styles.css';

export const CustomSidebar = ({ title }) => {
    return <div className="sidebar__container">
      <Sidebar className="sidebar__content">
        <Menu>
          {itemList && Array.isArray(itemList) && itemList.map(item => (
            <MenuItem color='#00000' component={<Link to={item.path} />}>{item.title}</MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </div>
}