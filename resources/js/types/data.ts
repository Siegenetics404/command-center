import { DollarSign, Users, Receipt, Flame } from "lucide-react";
import { Stat, Task, Message, Priority } from "./types";

export const stats: Stat[] = [
    {
        label: "Revenue MTD",
        value: "$284k",
        delta: "12%",
        note: "vs last mo",
        trend: "up",
        icon: DollarSign,
    },
    {
        label: "Active leads",
        value: "47",
        delta: "6",
        note: "new today",
        trend: "up",
        icon: Users,
    },
    {
        label: "Pending invoices",
        value: "$91k",
        delta: "3",
        note: "overdue",
        trend: "overdue",
        icon: Receipt,
    },
    {
        label: "Burn rate",
        value: "$38k",
        delta: "5%",
        note: "vs last mo",
        trend: "up",
        icon: Flame,
    },
];

export const priorityStyles: Record<Priority, string> = {
    High: "bg-red-400/10 text-red-400",
    Medium: "bg-amber-400/10 text-amber-400",
    Low: "bg-gray-400/10 text-gray-400",
};

export const initialTasks: Task[] = [
    {
        id: "t1",
        title: "Follow up with Maria re: contract renewal",
        due: "Due today",
        priority: "High",
    },
    {
        id: "t2",
        title: "Send Q2 invoice to Dela Cruz Trading",
        due: "Due tomorrow",
        priority: "High",
    },
    {
        id: "t3",
        title: "Review onboarding deck for new client",
        due: "Due in 2 days",
        priority: "Medium",
    },
    {
        id: "t4",
        title: "Approve leave request from Jared",
        due: "Due in 3 days",
        priority: "Low",
    },
];

export const initialMessages: Message[] = [
    {
        id: "m1",
        name: "Sarah Lim",
        preview: "Can we move the call to 3pm instead?",
        time: "2m ago",
        read: false,
    },
    {
        id: "m2",
        name: "Dela Cruz Trading",
        preview: "Confirming receipt of the invoice, thanks!",
        time: "1h ago",
        read: false,
    },
    {
        id: "m3",
        name: "Jared Tan",
        preview: "Submitted my leave request for next week.",
        time: "3h ago",
        read: false,
    },
    {
        id: "m4",
        name: "Maria Santos",
        preview: "Let's discuss the renewal terms tomorrow.",
        time: "Yesterday",
        read: false,
    },
];
