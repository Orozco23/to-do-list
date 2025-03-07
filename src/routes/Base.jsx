import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import ListOfToDo from "../pages/ListOfToDo";

export default function Base() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />}/>
                <Route path='/to-do' element={<ListOfToDo />}/>
            </Routes>
        </BrowserRouter>
    )
}