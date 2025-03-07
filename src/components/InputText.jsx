export default function InputText({ type, placeholder, maxLength, name, id }) {
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            maxLength={maxLength}
            name={name}
            id={id}
        >
        </input>
    )
}