import type {StatusType} from "../../entities/task/TaskTypes.ts";
import { TaskItem } from "../task-item/TaskItem.tsx";
import {Button} from "@mui/material";
import './TaskList.css';
import AddIcon from '@mui/icons-material/Add';
import {useTaskStore} from "../../entities/task/TaskStore.ts";

interface TaskListProps {
    openCreateTask: (status: StatusType) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ openCreateTask }) => {
    const { getAllTasks } = useTaskStore();
    const allTasks = getAllTasks();

    const todoTasks = allTasks.filter(task => task.status === 'ToDo');
    const inProgressTasks = allTasks.filter(task => task.status === 'InProgress');
    const doneTasks = allTasks.filter(task => task.status === 'Done');

    const createTask = (status: StatusType) => {
        openCreateTask(status)
    }

    return (
        <div className="TaskBoard">
            <div className="TaskColumn">
                <h3>Открыто</h3>
                <div className="TaskColumnContent">
                    {todoTasks.map((task, index) => (
                        <TaskItem key={index} task={task} />
                    ))}
                </div>
                <Button
                    sx={{backgroundColor: 'var(--color-button)'}}
                    size="small" variant="contained"
                    startIcon={<AddIcon/>}
                    onClick={() => createTask('ToDo')}
                >
                    Добавить задачу
                </Button>
            </div>

            <div className="TaskColumn">
                <h3>В работе</h3>
                <div className="TaskColumnContent">
                    {inProgressTasks.map((task, index) => (
                        <TaskItem key={index} task={task} />
                    ))}
                </div>
                <Button
                    sx={{backgroundColor: 'var(--color-button)'}}
                    size="small" variant="contained"
                    startIcon={<AddIcon/>}
                    onClick={() => createTask("InProgress")}
                >
                    Добавить задачу
                </Button>
            </div>

            <div className="TaskColumn">
                <h3>Готово</h3>
                <div className="TaskColumnContent">
                    {doneTasks.map((task, index) => (
                        <TaskItem key={index} task={task} />
                    ))}
                </div>
                <Button
                    sx={{backgroundColor: 'var(--color-button)'}}
                    size="small" variant="contained"
                    startIcon={<AddIcon/>}
                    onClick={() => createTask("Done")}
                >
                    Добавить задачу
                </Button>
            </div>
        </div>
    );
};