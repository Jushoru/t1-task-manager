import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AllTasks } from "../../entities/task/TaskData.ts";
import type {TaskUi} from "../../entities/task/TaskTypes.ts";
import {ModalDialog} from "../../widgets/ModalDialog.tsx";


const Modal = () => {
    const { id: taskId } = useParams();
    const navigate = useNavigate();

    const [taskData, setTaskData] = useState<TaskUi | undefined>(undefined);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (taskId) {
            const task = AllTasks.find(({ id }) => taskId === id);
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
                    <p>{taskData.title}</p>
                    <button onClick={closeModal}>Close</button>
                </ModalDialog>
            )}
        </>
    );
};

export default Modal;