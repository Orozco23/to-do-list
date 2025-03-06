import { Tooltip } from "react-tooltip"

export default function Item({ color, status, text }) {
    const icons = ["bi bi-check2-square icon-medium", "bi bi-square icon-small-square"]
    const classes = ['item strike-out ', 'item ']

    return (
        <li className={classes[status] + color + ' to-do'}>
            <i className={icons[status]} />
            <h4>
                {text}
            </h4>
            <i className="bi bi-pencil icon-small" />
            <i 
                className="bi bi-trash3 icon-small"
                data-tooltip-id="option"
                data-tooltip-content="Delete task"
            />
            <Tooltip id="option" />
        </li>
    )
}