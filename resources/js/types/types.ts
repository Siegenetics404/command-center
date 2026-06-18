import { LucideIcon } from "lucide-react";

export type Trend = "up" | "down" | "overdue";

export type Stat = {
    label: string;
    value: string;
    delta?: string;
    note: string;
    trend: Trend;
    icon: LucideIcon;
};

export type Priority = "High" | "Medium" | "Low";

export type Task = {
    id: string;
    title: string;
    due: string;
    priority: Priority;
};

export type Message = {
    id: string;
    name: string;
    preview: string;
    time: string;
    read: boolean;
};
