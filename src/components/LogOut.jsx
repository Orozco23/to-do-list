import { Tooltip } from "react-tooltip";

export default function LogOut() {
    return (
        <div className="grid primary-color">
            <h2>TO DO LIST</h2>
            <i 
                className="bi bi-door-closed icon-medium"
                data-tooltip-id="logout"
                data-tooltip-content="Log Out"
            />
            <Tooltip id="logout" />
        </div>
    )
}