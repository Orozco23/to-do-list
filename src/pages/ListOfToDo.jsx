import Footer from "../components/Footer"
import Header from "../components/header"
import List from "../components/List"
import LogOut from "../components/LogOut"

export default function ListOfToDo() {
    const tasks = [
        {text: 'do la sol', status: 0},
        {text: 'finish', status: 1},
        {text: 'kitting', status: 1},
        {text: 'buy', status: 0},
        {text: 'abcde fghijk lmno pqrstu vwxyz', status: 0},
        {text: 'abcdef ghij klmnop qrst uvwxyz', status: 1}
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