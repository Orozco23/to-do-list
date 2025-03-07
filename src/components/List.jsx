import Item from "./Item"

export default function List({ tasks, setUpdate }) {
    const colors = [ 'secondary-background', 'primary-background' ]
    const items = tasks.map((task, index) => 
        <Item
            key={index}
            color={colors[index % 2]}
            is_completed={task.is_completed}
            id={task.id}
            title={task.title}
            description={task.description}
            created_at={task.created_at}
            setUpdate={setUpdate}
        />);

    return (
        <div className="list-card">
            <ul className="list">{items}</ul>
        </div>
    )
}