import './styles/App.css'
import { Routes, Route, Link } from "react-router";
import {TasksPage} from "../pages/tasks/ui/TasksPage.tsx";
import {EditTaskPage} from "../pages/edit-task/ui/EditTaskPage.tsx";

function App() {

  return (
    <>
        <header>
            <Link to="/" className="logoWrapper">
                <img src="/logo.svg" alt="logo" width="40"/>
                <span>Тасочный менеджеритель</span>
            </Link>
        </header>
        <div className="mainWrapper">
            <Routes>
                <Route path="/" element={<TasksPage/>} />
                <Route path="/task" element={<EditTaskPage/>} />
            </Routes>
        </div>
    </>
  )
}

export default App
