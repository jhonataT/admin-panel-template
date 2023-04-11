import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { SubHeader } from '../../components/SubHeader';
import { DefaultTable } from '../../components/Table';
import './styles.css';

export const UsersScreen = ({ data }) => {
  const navigate = useNavigate();

  const buttons = [{
    title: 'Novo usuário',
    onClick: () => navigate('/users/new'),
    type: 'contained',
    color: "primary",
    fullWidth: false
  }];

  return <div className="users__container">
    <Card style={{ padding: "0 0 20px 0" }}>
      <SubHeader {...{ buttons }} />
      <div className="table__container">
        <DefaultTable {...{ data }} />
      </div>
    </Card>
  </div>
}