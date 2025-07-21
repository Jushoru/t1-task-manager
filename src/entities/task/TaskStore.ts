import { create } from 'zustand';
import type { TaskUi } from './TaskTypes';

interface TaskState {
    tasks: TaskUi[];
    createTask: (task: TaskUi) => void;
    deleteTask: (id: string) => void;
    updateTask: (id: string, updatedFields: Partial<TaskUi>) => void;
    getAllTasks: () => TaskUi[];
    getTaskById: (id: string) => TaskUi | undefined;
}

const loadTasks = (): TaskUi[] => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
};

const saveTasks = (tasks: TaskUi[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const useTaskStore = create<TaskState>((set, get) => ({
    tasks: loadTasks(),

    createTask: (task) =>
        set((state) => {
            const newTasks = [...state.tasks, task];
            saveTasks(newTasks);
            return { tasks: newTasks };
        }),

    deleteTask: (id) =>
        set((state) => {
            const newTasks = state.tasks.filter((task) => task.id !== id);
            saveTasks(newTasks);
            return { tasks: newTasks };
        }),

    updateTask: (id, updatedFields) =>
        set((state) => {
            const newTasks = state.tasks.map((task) =>
                task.id === id ? { ...task, ...updatedFields } : task
            );
            saveTasks(newTasks);
            return { tasks: newTasks };
        }),

    getAllTasks: () => get().tasks,

    getTaskById: (id) => get().tasks.find((task) => task.id === id),
}));