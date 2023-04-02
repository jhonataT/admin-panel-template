import { CustomHeader } from '../Header';
import { CustomSidebar } from '../Sidebar';
import './styles.css';

export const MainLayout = ({ children, itemList, title = "Home" }) => {
    return <main className="main-layout__container">
        <CustomSidebar {...{itemList}}/>
        <div className="main-layout__content">
            <CustomHeader title={title}/>
            {children}
        </div>
    </main>
}