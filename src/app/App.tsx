import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {TasksPage} from "../pages/tasks/TasksPage.tsx";


// commit: change router method from Routes to createBrowserRouter
const router = createBrowserRouter([
    {
        path: '/',
        element: <TasksPage />,
        children: [
            {
                path: 'task/:id',
                element: null,
            },
        ],
    },
]);

function App() {

  return (
    <>
        <header>
            <div className="logoWrapper">
                <img src="/logo.svg" alt="logo" width="35"/>
                <span className="logoTitle">Тасочный менеджеритель</span>
            </div>
        </header>
        <div className="mainWrapper">
            <RouterProvider router={router}/>
        </div>
    </>
  )
}

export default App
