import { Tooltip } from "react-tooltip";
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
    
    const { removeAll } = useStore()
    const navigate = useNavigate()

    const removeStates = () => {
        removeAll()
        navigate('/')
    }

    return (
        <div className="grid primary-color">
            <h2>TO DO LIST</h2>
            <i 
                className="bi bi-door-closed icon-medium"
                data-tooltip-id="logout"
                data-tooltip-content="Log Out"
                onClick={removeStates}
            />
            <Tooltip id="logout" />
        </div>
    )
}