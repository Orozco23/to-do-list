export default function Button({ type, text, color, event, name, id }) {
    return (
        <button 
            type={type} 
            className={color}
            onClick={event}
            name={name}
            id={id}
        >
            {text}
        </button>
    )
}