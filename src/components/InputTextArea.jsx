export default function InputTextArea({ maxlength, rows, placeholder, id, onChange }) {
    return (
        <textarea 
            maxlength={maxlength} 
            rows={rows}
            placeholder={placeholder}
            name={id}
            id={id}
            onChange={onChange}
        ></textarea>
    )
}