import Item from "./Item"

export default function List({ tasks }) {
    const colors = [ 'secondary-background', 'primary-background' ]
    const items = tasks.map((task, index) => 
        <Item
            key={index}
            color={colors[index % 2]}
            is_completed={task.is_completed}
            title={task.title}
        />);

    return (
        <div className="list-card">
            <ul className="list">{items}</ul>
        </div>
    )
}