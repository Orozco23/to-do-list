import { useState } from "react"
import { Tooltip } from "react-tooltip"

export default function Filter({ filterTasks }) {
    const options = [
        {icon: <i className="bi bi-arrow-down"/>, value: '-created_at', label: ' created at'},
        {icon: <i className="bi bi-arrow-up"/>, value: 'created_at', label: ' created at'},
        {icon: <i className="bi bi-arrow-down"/>, value: '-title', label: ' title'},
        {icon: <i className="bi bi-arrow-up"/>, value: 'title', label: ' title'},
        {icon: <i className="bi bi-x"/>, value: 'is_completed', label: "isn't completed"},
        {icon: <i className="bi bi-check"/>, value: '-is_completed', label: 'is completed'}
    ]
    const colors = [ 'primary-color', 'secondary-color' ]

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)

    return (
        <div className="div-filter">
            <div onClick={toggleDropdown}>
                <span role="icon" label="filter">
                    <i 
                        className="bi bi-funnel secondary-color icon-large"
                        data-tooltip-id="option"
                        data-tooltip-content="Filter"
                    />
                </span>
            </div>

            {isOpen && (
                <ul className="filter-selector">
                    {
                        options.map((option, index) =>
                            <li 
                                key={index} 
                                className={colors[index % 2]}
                                onClick={() => {
                                    filterTasks(option.value)
                                    setIsOpen(false)
                                }}
                                name={option.value}
                            >
                                {option.icon}{option.label}
                            </li>
                        )
                    }
                </ul>
            )}
            <Tooltip id="option" />
        </div>
    )
}