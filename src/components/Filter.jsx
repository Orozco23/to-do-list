import { useState } from "react"
import { Tooltip } from "react-tooltip"

export default function Filter() {
    const options = [
        {icon: <i className="bi bi-trash2 icon-medium primary-color"/>, value: 'created_at'},
        {icon: <i className="bi bi-pencil icon-medium"/>, value: 'title'},
        {icon: <i className="bi bi-trash3 icon-medium primary-color"/>, value: 'is_completed'}
    ]
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('All')

    const toggleDropdown = () => setIsOpen(!isOpen)

    const handleSelect = (option) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

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
                                onClick={() => handleSelect(option.value)} 
                                name={option.value}
                                data-tooltip-id="option"
                                data-tooltip-content={option.value}
                            >
                                {option.icon}
                            </li>
                        )
                    }
                </ul>
            )}
            <Tooltip id="option" />
        </div>
    )
}