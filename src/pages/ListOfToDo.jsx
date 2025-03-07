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
    const [selectedOrder, setSelectedOrder] = useState('-created_at')
    const [pagesNumber, setPagesNumber] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    // items
    const limit = 5

    const setUpdate = () => isUpdate(!update)

    useEffect(() =>{
        const getTasks = async () => {
            try {
                let response = await getList({
                    token,
                    limit,
                    order: '-created_at',
                    page: 1
                })
                setTasks(response.data)
                setPagesNumber(response.meta.pages)
                setCurrentPage(1)
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
                limit,
                order,
                page: 1
            })
            setTasks(response.data)
            setSelectedOrder(order)
            setCurrentPage(1)
            setPagesNumber(response.meta.pages)
        } catch (error) {
            console.error('Status', error.status)
        }
    }
    
    const goToNextPage = async () => {
        if (currentPage === pagesNumber) return
        try {
            let response = await getList({
                token,
                limit,
                order: selectedOrder,
                page: currentPage + 1
            })
            setTasks(response.data)
            setCurrentPage((currentPage) => currentPage + 1)
            setPagesNumber(response.meta.pages)
        } catch (error) {
            console.error('Status', error.status)
        }
    }
    const goToPreviousPage = async () => {
        if (currentPage === 1) return
        try {
            let response = await getList({
                token,
                limit,
                order: selectedOrder,
                page: currentPage - 1
            })
            setTasks(response.data)
            setCurrentPage((currentPage) => currentPage - 1)
            setPagesNumber(response.meta.pages)
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
                next={goToNextPage}
                previous={goToPreviousPage}
                pages={currentPage + ' of ' + pagesNumber}
            />
        </>
    )
}