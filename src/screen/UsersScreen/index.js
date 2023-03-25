import { DefaultTable } from '../../components/Table';
import './styles.css';

export const UsersScreen = ({ data }) => {
    return <div className="users__container">
        <DefaultTable {...{data}} />
    </div>
}