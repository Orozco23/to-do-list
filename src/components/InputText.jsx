export default function InputText({ type, placeholder, maxLength, id, onChange, value }) {
    return (
        <input 
            type={type} 
            placeholder={placeholder}
            maxLength={maxLength}
            name={id}
            id={id}
            onChange={onChange}
            value={value}
        >
        </input>
    )
}