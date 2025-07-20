import { TaskList } from '../../widgets/task-list/TaskList';
import {CreateTask} from "../../features/create-task/CreateTask.tsx";
import type {StatusType} from "../../entities/task/TaskTypes";
import {useState} from "react";
import EditTaskModal from "../edit-task/EditTaskModal.tsx";
import {ModalDialog} from "../../widgets/ModalDialog.tsx";

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
            <TaskList openCreateTask={openCreateTaskModal}/>
            {/*TODO: вынести creteTask в отдельную страницу /new/*/}
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