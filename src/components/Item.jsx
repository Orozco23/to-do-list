import { useState } from "react"
import { Tooltip } from "react-tooltip"
import ModalRead from "./ModalRead"
import { deleteTask, updateTask } from "../fetch/Task.fetch"
import useStore from "../store/useStore"

export default function Item({ color, is_completed, id, title, description, created_at, setUpdate }) {
    const icons = ["bi bi-square icon-small-square", "bi bi-check2-square icon-medium"]
    const classes = [ 'item ', 'item strike-out ']

    const { token } = useStore()

    const [isOpen, setIsOpen] = useState(false)
    
    const toggleModal = () => setIsOpen(!isOpen)

    const checkItem = async () => {
        try {
            await updateTask({
                token,
                id
            })
            setUpdate()
        } catch (error) {
            console.error('Status', error.status)
        }
    }

    const deleteItem = async () => {
        try {
            await deleteTask({
                token,
                id
            })
            setUpdate()
        } catch (error) {
            console.error('Status', error.status)
        }
    }

    return (
        <li className={classes[Number(is_completed)] + color + ' to-do'}>
            <i 
                className={icons[Number(is_completed)]}
                onClick={checkItem} 
            />
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
                onClick={deleteItem}
            />
            <Tooltip id="option" />
            <ModalRead 
                isOpen={isOpen}
                toggleModal={toggleModal}
                title={title}
                description={description}
                created_at={created_at}
            />
        </li>
    )
}