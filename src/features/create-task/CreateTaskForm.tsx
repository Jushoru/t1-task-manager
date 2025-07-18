import type { TaskUi, StatusType, CategoryType, PriorityType} from "../../entities/task/TaskTypes";
import { useState } from 'react';
import {
    TextField,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    Button,
} from '@mui/material';
import { validateTask } from '../../entities/task/TaskValidate';

export interface CreateTaskFormProps {
    taskStatus: StatusType;
    newTask: (task: TaskUi) => void;
    onCancel: () => void;
}

export const CreateTaskForm = ({ taskStatus, newTask, onCancel }: CreateTaskFormProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Test');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const task: TaskUi = {
            id: Date.now().toString(),
            title,
            description,
            category: category as CategoryType,
            status: taskStatus,
            priority: priority as PriorityType,
        };

        const errors = validateTask(task);

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }

        newTask(task);
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                label="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                margin="dense"
            />
            <TextField
                fullWidth
                label="Описание задачи"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel id="category-select-label">Категория</InputLabel>
                <Select
                    labelId="category-select-label"
                    value={category}
                    label="Категория"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <MenuItem value="Bug">Bug</MenuItem>
                    <MenuItem value="Feature">Feature</MenuItem>
                    <MenuItem value="Documentation">Documentation</MenuItem>
                    <MenuItem value="Refactor">Refactor</MenuItem>
                    <MenuItem value="Test">Test</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel id="priority-select-label">Приоритет</InputLabel>
                <Select
                    labelId="priority-select-label"
                    value={priority}
                    label="Приоритет"
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                </Select>
            </FormControl>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', marginBottom: '16px' }}>
                <Button
                    sx={{border: 'solid 1px var(--color-button)', color: 'var(--color-button)'}}
                    variant="outlined" onClick={onCancel} size="small"
                >
                    Отмена
                </Button>
                <Button sx={{backgroundColor: 'var(--color-button)'}}
                        type="submit" variant="contained" size="small"
                >
                    Создать задачу
                </Button>
            </div>
        </form>
    );
};