export default function Button({ text, color }) {
    return (
        <button type="submit" className={color}>
            {text}
        </button>
    )
}