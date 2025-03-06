import { useState } from "react"
import { Tooltip } from "react-tooltip"
import ModalRead from "./ModalRead"

export default function Item({ color, is_completed, title }) {
    const icons = ["bi bi-square icon-small-square", "bi bi-check2-square icon-medium"]
    const classes = [ 'item ', 'item strike-out ']

    const [isOpen, setIsOpen] = useState(false)
    
    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <li className={classes[Number(is_completed)] + color + ' to-do'}>
            <i className={icons[Number(is_completed)]} />
            <h4>
                {title}
            </h4>
            <i 
                className="bi bi-eye icon-small"
                data-tooltip-id="option"
                data-tooltip-content="View task"
                onClick={toggleModal}
            />
            <i 
                className="bi bi-trash3 icon-small"
                data-tooltip-id="option"
                data-tooltip-content="Delete task"
            />
            <Tooltip id="option" />
            <ModalRead 
                isOpen={isOpen}
                toggleModal={toggleModal}
                title={'0123456789 0123456789 0123456789 0123456789 012345'}
                description={'0123456789 0123456789 0123456789 0123456789 0123450123456789 0123456789 0123456789 0123456789 0123450123456789 0123456789 0123456789 0123456789 012345 0123456789 0123456789 0123456789 0123456789 012345 0123456789 0123456789 0123456789 0123456789 012345 0123456789 0123456789 0123456789 0123456789 012345'}
            />
        </li>
    )
}