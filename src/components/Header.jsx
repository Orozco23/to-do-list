import Filter from "./Filter";

export default function Header({ filterTasks }) {
    return (
        <header className="secondary-color">
            <i className="bi bi-list-task icon-large" />
            <h1 className="bebas-neue-regular">
                List Of TO DO
            </h1>
            <Filter 
                filterTasks={filterTasks}
            />                
        </header>
    )
}