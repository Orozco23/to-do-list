import { Tooltip } from 'react-tooltip'
import { useState } from "react";
import ModalCreate from './ModalCreate';

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <footer>               
            <i 
                data-tooltip-id="create"
                data-tooltip-content="Add a task"
                className="bi bi-plus-circle-fill create icon-larger secondary-color" 
                onClick={toggleModal}
            />
            <Tooltip id="create" />
            <ModalCreate
                isOpen={isOpen}
                toggleModal={toggleModal}
            />
        </footer>
    )
}