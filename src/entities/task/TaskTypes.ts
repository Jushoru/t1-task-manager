export interface TaskUi {
    title: string;
    description?: string;
    category: 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
    status: 'ToDo' | 'InProgress' | 'Done';
    priority: 'Low' | 'Medium' | 'High';
}