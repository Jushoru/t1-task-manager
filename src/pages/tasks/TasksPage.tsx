import { TaskList } from '../../widgets/task-list/TaskList';
import type { TaskUi } from '../../entities/task/TaskTypes';
import './TasksPage.css'
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import {CreateTaskForm} from "../../features/create-task/CreateTaskForm.tsx";
import type {StatusType} from "../../entities/task/TaskTypes";
import {useState} from "react";

// Временный массив задач
const mockTasks: TaskUi[] = [
    {
        id: 0,
        title: 'Fix login bug',
        description: 'User cannot logout after session expires',
        category: 'Bug',
        status: 'InProgress',
        priority: 'High',
    },
    {
        id: 1,
        title: 'Add dark mode',
        description: 'Implement dark theme toggle. For all devices in this World. World Wide theme for ALL DEVICES. Implement dark theme toggle. For all devices in this World. World Wide theme for ALL DEVICES.Implement dark theme toggle. For all devices in this World. World Wide theme for ALL DEVICES',
        category: 'Feature',
        status: 'ToDo',
        priority: 'Medium',
    },
    {
        id: 2,
        title: 'Write documentation',
        category: 'Documentation',
        status: 'Done',
        priority: 'Low',
    },
];

export const TasksPage: React.FC = () => {
    const [modalActive, setActive] = useState(false);
    const [currentTaskStatus, setCurrentTaskStatus] = useState<StatusType>('ToDo');

    const openCreateTaskModal = (status: StatusType) => {
        setCurrentTaskStatus(status);
        setActive(true);
    }

    const createNewTask = (data: TaskUi) => {
        mockTasks.push(data)
    }
    return (
        <>
            <TaskList tasks={mockTasks} openCreateTask={openCreateTaskModal}/>
            <Dialog
                sx={{
                    backdropFilter: "blur(2px)",
                    '& .MuiDialog-paper': {
                        backgroundColor: "var(--color-bg-task)",
                    }
                }}
                open={modalActive}
                onClose={(_, reason) => {
                    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
                        setActive(false);
                    }
                }}
            >
                <DialogTitle
                    sx={{fontSize: 'var(--font-md)', fontWeight: 'bold', color: 'var(--color-bg-secondary)'}}
                >
                    Создание задачи
                </DialogTitle>
                <DialogContent sx={{ paddingBottom: 0 }}>
                    <CreateTaskForm
                        taskStatus={currentTaskStatus}
                        newTask={createNewTask}
                        onCancel={() => setActive(false)}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};