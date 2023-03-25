import { useNavigate } from 'react-router-dom';
import { SubHeader } from '../../components/SubHeader';
import { DefaultTable } from '../../components/Table';
import './styles.css';


export const UsersScreen = ({ data }) => {
    const navigate = useNavigate();

    const buttons = [
        {
            title: 'Novo usuário',
            onClick: () => navigate('/users/new'),
            type: 'contained',
            color: "primary",
            fullWidth: false
        }
    ]

    return <div className="users__container">
        <SubHeader {...{buttons}}/>
        <DefaultTable {...{data}} />
    </div>
}