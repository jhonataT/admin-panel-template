import { useLocation } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, sidebarClasses, useProSidebar } from 'react-pro-sidebar';
import * as Icons from "react-icons/io5";
import { itemList } from '../../routes';
import { Link } from 'react-router-dom';
import { SquareLogo } from '../Image';
import logo from '../../assets/images/main-logo.png';
import './styles.css';

const DynamicIoIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) { // Return a default one
    return <Icons.IoHome />;
  }

  return <IconComponent />;
};

export const CustomSidebar = () => {
  const location = useLocation()
  console.log("LOCATION", location)
  const { collapseSidebar, toggleSidebar, collapsed, toggled } = useProSidebar();

    return <div className="sidebar__container">
      {/* <SquareLogo imgSrc={logo}/> */}
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
              // only apply styles on first level elements of the tree
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
              return <MenuItem
                active={location.pathname === item.path}
                component={<Link to={item.path}/>}
                icon={<DynamicIoIcon name={item?.icon}/>}
              >
                {item.title}
              </MenuItem>
            }
          })}
        </Menu>
      </Sidebar>
    </div>
}