import { create } from 'zustand';
import type { TaskUi } from './TaskTypes';
import { AllTasks } from './TaskData';

interface TaskState {
    tasks: TaskUi[];
    createTask: (task: TaskUi) => void;
    deleteTask: (id: string) => void;
    updateTask: (id: string, updatedFields: Partial<TaskUi>) => void;
    getAllTasks: () => TaskUi[];
    getTaskById: (id: string) => TaskUi | undefined;
}

export const useTaskStore = create<TaskState>((set, get) => ({
    tasks: AllTasks,
    createTask: (task) => set({ tasks: [...get().tasks, task] }),
    deleteTask: (id) => set({ tasks: get().tasks.filter((task) => task.id !== id) }),
    updateTask: (id, updatedFields) =>
        set({
            tasks: get().tasks.map((task) =>
                task.id === id ? { ...task, ...updatedFields } : task
            ),
        }),
    getAllTasks: () => get().tasks,
    getTaskById: (id) => get().tasks.find((task) => task.id === id),
}));