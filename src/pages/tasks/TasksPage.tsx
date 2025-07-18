import { TaskList } from '../../widgets/task-list/TaskList';
import type { TaskUi } from '../../entities/task/TaskTypes';
import {CreateTask} from "../../features/create-task/CreateTask.tsx";
import type {StatusType} from "../../entities/task/TaskTypes";
import {useState} from "react";
import {AllTasks} from "../../entities/task/TaskData.ts";
import EditTaskModal from "../edit-task/EditTaskModal.tsx";
import {ModalDialog} from "../../widgets/ModalDialog.tsx";

// Временный массив задач
const allTasks: TaskUi[] = AllTasks;

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

    return (
        <>
            <TaskList tasks={allTasks} openCreateTask={openCreateTaskModal}/>
            <ModalDialog open={modalActive} handleOnClose={closeModal} title={"Создание задачи"}>
                <CreateTask
                    taskStatus={currentTaskStatus}
                    onCancel={() => setActive(false)}
                />
            </ModalDialog>
            <EditTaskModal/>
        </>
    );
};