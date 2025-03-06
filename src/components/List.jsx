import Item from "./Item"

export default function List({ tasks }) {
    const colors = [ 'secondary-background', 'primary-background' ]
    const items = tasks.map((task, index) => 
        <Item
            key={index}
            color={colors[index % 2]}
            status={task.status}
            text={task.text}
        />);

    return (
        <div className="list-card">
            <ul className="list">{items}</ul>
        </div>
    )
}