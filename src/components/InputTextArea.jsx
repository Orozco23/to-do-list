export default function InputTextArea({ maxlength, rows, placeholder, name, id }) {
    return (
        <textarea 
            maxlength={maxlength} 
            rows={rows}
            placeholder={placeholder}
            name={name}
            id={id}
        ></textarea>
    )
}