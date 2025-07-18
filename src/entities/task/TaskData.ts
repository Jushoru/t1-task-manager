import type {TaskUi} from "./TaskTypes.ts";

export const AllTasks: TaskUi[] = [
    {
        id: '0',
        title: 'Fix login bug',
        description: 'User cannot logout after session expires',
        category: 'Bug',
        status: 'InProgress',
        priority: 'High',
    },
    {
        id: '1',
        title: 'Add dark mode',
        description: 'Implement dark theme toggle. For all devices in this World. World Wide theme for ALL DEVICES. Implement dark theme toggle. For all devices in this World. World Wide theme for ALL DEVICES.Implement dark theme toggle. For all devices in this World. World Wide theme for ALL DEVICES',
        category: 'Feature',
        status: 'ToDo',
        priority: 'Medium',
    },
    {
        id: '2',
        title: 'Write documentation',
        category: 'Documentation',
        status: 'Done',
        priority: 'Low',
    },
];