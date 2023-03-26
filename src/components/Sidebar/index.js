import { useLocation } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, sidebarClasses, useProSidebar } from 'react-pro-sidebar';
import * as Icons from "react-icons/io5";
import { itemList } from '../../routes';
import { Link } from 'react-router-dom';
import './styles.css';

const DynamicIoIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return <Icons.IoHome />;
  }

  return <IconComponent />;
};

export const CustomSidebar = () => {
  const location = useLocation()
  const { collapseSidebar, toggleSidebar, collapsed, toggled } = useProSidebar();

    return <div className="sidebar__container">
      <Sidebar
        onMouseOver={() => toggleSidebar(!collapsed)}
        onMouseOut={() => toggleSidebar(!collapsed)}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: 'transparent',
            color: 'var(--primary-white)',
            padding: '12px'
          },
        }}
        className="sidebar__content"
      >
        <Menu
          rootStyles={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  width: '200px',
                  borderRadius: '12px',
                  marginTop: '10px',
                  backgroundColor: active ? 'var(--secondary-background-hover)' : 'tranparent',
                  transition: 'all .2s',
                  color: active ? 'var(--primary-background)' : 'var(--secondary-background)',
                  '&:hover': {
                    color: 'var(--primary-background)',
                    backgroundColor: 'var(--secondary-background-hover)',
                  },
                };
              }
            },
          }}
        >
          {itemList && Array.isArray(itemList) && itemList.map(item => {
            if(!item?.hidden) {
              let rootPath = item.path.split('/')[1] || '';
              return <MenuItem
                active={location.pathname && location.pathname.includes(rootPath)}
                component={<Link to={item.path}/>}
                icon={<DynamicIoIcon name={item?.icon}/>}
                key={item.path}
              >
                {item.title}
              </MenuItem>
            }
          })}
        </Menu>
      </Sidebar>
    </div>
}