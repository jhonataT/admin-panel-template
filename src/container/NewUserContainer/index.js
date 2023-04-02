import { useNavigate } from "react-router-dom";
import { NewUserScreen } from "../../screen/NewUserScreen";

export const NewUserContainer = () => {
    const navigate = useNavigate()

    const cancelButton = () => navigate("/users")

    return <NewUserScreen {...{cancelButton}}/>
}