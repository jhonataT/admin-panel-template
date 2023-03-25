import MOCK_USER_DATA from '../../core/mocks/MOCK_USER_DATA.json'
import { UsersScreen } from '../../screen/UsersScreen';

export const UsersContainer = () => {
    return <UsersScreen data={MOCK_USER_DATA}/>
}