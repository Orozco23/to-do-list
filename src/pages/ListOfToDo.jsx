import Footer from "../components/Footer"
import Header from "../components/header"
import List from "../components/List"
import LogOut from "../components/LogOut"

export default function ListOfToDo() {
    const tasks = [
        {title: 'do la sol', is_completed: false},
        {title: 'finish', is_completed: true},
        {title: '0123456789 0123456789 0123456789 0123456789 012345', is_completed: true},
        {title: 'buy', is_completed: false},
        {title: 'abcde fghijk lmno pqrstu vwxyz', is_completed: false},
        {title: 'abcdef ghij klmnop qrst uvwxyz', is_completed: true}
    ]

    return (
        <>
            <LogOut />
            <Header />
            <List 
                tasks = {tasks}
            />
            <Footer />
        </>
    )
}