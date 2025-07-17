import { TaskList } from '../../widgets/task-list/TaskList';
import type { TaskUi } from '../../entities/task/TaskTypes';
import './TasksPage.css'

// Временный массив задач
const mockTasks: TaskUi[] = [
    {
        title: 'Fix login bug',
        description: 'User cannot logout after session expires',
        category: 'Bug',
        status: 'InProgress',
        priority: 'High',
    },
    {
        title: 'Add dark mode',
        description: 'Implement dark theme toggle. For all devices in this World. World Wide theme for ALL DEVICES. Implement dark theme toggle. For all devices in this World. World Wide theme for ALL DEVICES.Implement dark theme toggle. For all devices in this World. World Wide theme for ALL DEVICES',
        category: 'Feature',
        status: 'ToDo',
        priority: 'Medium',
    },
    {
        title: 'Write documentation',
        category: 'Documentation',
        status: 'Done',
        priority: 'Low',
    },
];

export const TasksPage: React.FC = () => {
    return (
        <>
            <TaskList tasks={mockTasks} />
        </>
    );
};