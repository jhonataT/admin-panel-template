import { useState } from 'react';
import { CustomHeader } from '../Header';
import { CustomSidebar } from '../Sidebar';
import './styles.css';

export const MainLayout = ({ children, itemList, title = "Home" }) => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
    
    return <main className="main-layout__container">
        <CustomSidebar {...{itemList, setSidebarCollapsed}}/>
        <div
            className={`main-layout__content ${isSidebarCollapsed && 'collapsed'}`}
        >
            <CustomHeader title={title}/>
            <div className="main-layout__children">
                {children}
            </div>
        </div>
    </main>
}