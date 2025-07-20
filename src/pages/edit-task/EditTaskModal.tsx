import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type {TaskUi} from "../../entities/task/TaskTypes.ts";
import {ModalDialog} from "../../widgets/ModalDialog.tsx";
import {EditTask} from "../../features/edit-task/EditTask.tsx"
import {useTaskStore} from "../../entities/task/TaskStore.ts";


const Modal = () => {
    const { id: taskId } = useParams();
    const navigate = useNavigate();

    const [taskData, setTaskData] = useState<TaskUi | undefined>(undefined);
    const getTaskById = useTaskStore((state) => state.getTaskById);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (taskId) {
            const task = getTaskById(taskId);
            setTaskData(task);
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [taskId]);

    const closeModal = () => {
        navigate('/');
    };

    return (
        <>
            {taskData && (
                <ModalDialog open={open} handleOnClose={closeModal} title={"задача"}>
                    <EditTask editTask={taskData} onCancel={closeModal}/>
                </ModalDialog>
            )}
        </>
    );
};

export default Modal;