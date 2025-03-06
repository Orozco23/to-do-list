import { Tooltip } from 'react-tooltip'

export default function Footer() {
    return (
        <footer>               
            <i 
                data-tooltip-id="create"
                data-tooltip-content="Add a task"
                className="bi bi-plus-circle-fill create icon-larger secondary-color" 
            />
            <Tooltip id="create" />
        </footer>
    )
}