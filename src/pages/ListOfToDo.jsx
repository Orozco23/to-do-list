import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/header"
import List from "../components/List"
import LogOut from "../components/LogOut"
import { getList } from "../fetch/Task.fetch"
import useStore from "../store/useStore"

export default function ListOfToDo() {

    const { token } = useStore()

    const [tasks, setTasks] = useState([])
    const [update, isUpdate] = useState(false)

    const setUpdate = () => isUpdate(!update)

    useEffect(() =>{
        const getTasks = async () => {
            try {
                let response = await getList({
                    token,
                    limit: 5,
                    order: '-created_at',
                    page: 1
                })
                setTasks(response.data)
            } catch (error) {
                console.error('Status', error.status)
            }
        }

        if (token) {
            getTasks()
        }
    },[token, update])

    const filterTasks = async (order) => {
        try {
            let response = await getList({
                token,
                limit: 5,
                order,
                page: 1
            })
            setTasks(response.data)
        } catch (error) {
            console.error('Status', error.status)
        }
    }

    return (
        <>
            <LogOut />
            <Header
                filterTasks={filterTasks}
            />
            <List 
                tasks={tasks}
                setUpdate={setUpdate}
            />
            <Footer 
                setUpdate={setUpdate}
            />
        </>
    )
}