import { useLocation } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, sidebarClasses, useProSidebar } from 'react-pro-sidebar';
import * as Icons from "react-icons/io5";
import { CgMenuMotion } from 'react-icons/cg';
import { itemList } from '../../routes';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import './styles.css';

const DynamicIoIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return <Icons.IoHome  size={24}/>;
  }

  return <IconComponent size={20}/>;
};

const Item = ({ route, rootPath }) => {
  const location = useLocation();
  return <MenuItem
    active={location.pathname && location.pathname.includes(rootPath)}
    component={<Link to={route.path}/>}
    icon={<DynamicIoIcon name={route?.icon}/>}
    key={route.path}
  >
    <Typography>{route.title}</Typography>
  </MenuItem>
}

export const CustomSidebar = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

    return <div className="sidebar__container">
      <Box className="sidebar-header__container">
        <CgMenuMotion
          size={48}
          className="sidebar-header--icon"
          onClick={() => collapseSidebar(!collapsed)}
        />
      </Box>
      <Sidebar
        transitionDuration={500}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: 'transparent',
            color: 'var(--primary-white)',
            padding: '12px',
          },
        }}
        className="sidebar__content"
      >
        <Menu
          iconshape="square"
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0) {
                return {
                  borderRadius: '12px',
                  marginTop: '15px',
                  backgroundColor: active ? collapsed ? 'transparent' : 'var(--secondary-background-hover)' : 'tranparent',
                  transition: 'all .2s',
                  fontSize: '18px',
                  color: active ? collapsed ? 'var(--gray-opacity)' : 'var(--primary-background)' : 'var(--secondary-background)',
                  '&:hover': {
                    color: collapsed ? 'var(--gray-opacity)' : 'var(--primary-background)',
                    backgroundColor: collapsed ? 'transparent' : 'var(--secondary-background-hover)',
                  },
                };
              }
            },
          }}
        >
          <Box>
            { 
              Array.isArray(itemList) && 
                itemList.map(item => {
                if(!item?.hidden) {
                  let rootPath = item.path.split('/')[1] || '';
                  return <Item route={item} rootPath={rootPath}/>
                }
              })
            }
          </Box>
        </Menu>
      </Sidebar>
    </div>
}