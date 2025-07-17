import './TaskItem.css'
import type {TaskUi} from "../../entities/task/TaskTypes.ts";
import {Chip} from "@mui/material";

interface TaskItemProps {
    task: TaskUi;
}

export const TaskItem: React.FC<TaskItemProps> = ({task}) => {
    return (
        <div className="taskItemWrapper">
            <div>
                <h3>{task.title}</h3>
                {task.description && <p className="taskDescription">{task.description}</p>}
            </div>
            <div className="tagsWrapper">
                <Chip label={task.priority} color="secondary" size="small" className="chipBold"/>
                <Chip label={task.category} color="primary" size="small" className="chipBold"/>
            </div>
        </div>
    )
}
