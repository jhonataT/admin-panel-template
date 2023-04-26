import { useEffect, useState } from 'react';
import { UsersScreen } from '../../screen/UsersScreen';
import { Api } from '../../core/communication';

export const UsersContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Api().get('/api/users')
        .then(response => setUsers(response?.data || []));
    }, []);

    return <UsersScreen data={users}/>
}