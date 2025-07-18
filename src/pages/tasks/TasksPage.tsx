import { TaskList } from '../../widgets/task-list/TaskList';
import type { TaskUi } from '../../entities/task/TaskTypes';
import './TasksPage.css'
import {CreateTaskForm} from "../../features/create-task/CreateTaskForm.tsx";
import type {StatusType} from "../../entities/task/TaskTypes";
import {useState} from "react";
import {AllTasks} from "../../entities/task/TaskData.ts";
import EditTaskModal from "../edit-task/EditTaskModal.tsx";
import {ModalDialog} from "../../widgets/ModalDialog.tsx";


// Временный массив задач
const mockTasks: TaskUi[] = AllTasks;

export const TasksPage: React.FC = () => {
    const [modalActive, setActive] = useState(false);
    const [currentTaskStatus, setCurrentTaskStatus] = useState<StatusType>('ToDo');

    const openCreateTaskModal = (status: StatusType) => {
        setCurrentTaskStatus(status);
        setActive(true);
    }

    const closeModal = () => {
        setActive(false);
    }

    const createNewTask = (data: TaskUi) => {
        mockTasks.push(data)
    }
    return (
        <>
            <TaskList tasks={mockTasks} openCreateTask={openCreateTaskModal}/>
            <ModalDialog open={modalActive} handleOnClose={closeModal} title={"Создание задачи"}>
                <CreateTaskForm
                    taskStatus={currentTaskStatus}
                    newTask={createNewTask}
                    onCancel={() => setActive(false)}
                />
            </ModalDialog>
            <EditTaskModal/>
        </>
    );
};