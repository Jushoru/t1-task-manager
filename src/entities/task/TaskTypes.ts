export type StatusType = 'ToDo' | 'InProgress' | 'Done';
export type CategoryType = 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
export type PriorityType = 'Low' | 'Medium' | 'High';

export interface TaskUi {
    id: number;
    title: string;
    description?: string;
    category: CategoryType;
    status: StatusType;
    priority: PriorityType;
}

