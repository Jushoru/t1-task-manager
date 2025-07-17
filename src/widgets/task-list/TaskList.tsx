import type { TaskUi } from "../../entities/task/TaskTypes.ts";
import { TaskItem } from "../task-item/TaskItem.tsx";
import './TaskList.css';

interface TaskListProps {
    tasks: TaskUi[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    const todoTasks = tasks.filter(task => task.status === 'ToDo');
    const inProgressTasks = tasks.filter(task => task.status === 'InProgress');
    const doneTasks = tasks.filter(task => task.status === 'Done');

    return (
        <div className="TaskBoard">
            <div className="TaskColumn">
                <h3>Открыто</h3>
                <div className="TaskColumnContent">
                    {todoTasks.map((task, index) => (
                        <TaskItem key={index} task={task} />
                    ))}
                </div>
            </div>

            <div className="TaskColumn">
                <h3>В работе</h3>
                <div className="TaskColumnContent">
                    {inProgressTasks.map((task, index) => (
                        <TaskItem key={index} task={task} />
                    ))}
                </div>
            </div>

            <div className="TaskColumn">
                <h3>Готово</h3>
                <div className="TaskColumnContent">
                    {doneTasks.map((task, index) => (
                        <TaskItem key={index} task={task} />
                    ))}
                </div>
            </div>
        </div>
    );
};