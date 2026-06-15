import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

// ─── Icons ──────────────────────────────────────────────────────────────────
function IconTrendingUp(props: { className?: string }) {
    return (
        <svg
            className={props.className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6"
            />
        </svg>
    );
}

function IconUsers(props: { className?: string }) {
    return (
        <svg
            className={props.className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 014-3.87m6-2.13a4 4 0 10-4-4 4 4 0 004 4zm6 2.13a4 4 0 100-7.76"
            />
        </svg>
    );
}

function IconCurrency(props: { className?: string }) {
    return (
        <svg
            className={props.className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v8m-3-5h4.5a1.5 1.5 0 010 3H9m3-8a9 9 0 100 18 9 9 0 000-18z"
            />
        </svg>
    );
}

function IconFlag(props: { className?: string }) {
    return (
        <svg
            className={props.className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 3v18M5 4h11l-2 3 2 3H5"
            />
        </svg>
    );
}

// ─── Card shell ───────────────────────────────────────────────────────────────
function Card({
    title,
    action,
    children,
}: {
    title: string;
    action?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                {action}
            </div>
            <div className="p-5">{children}</div>
        </div>
    );
}

function ViewAllLink() {
    return (
        <button className="text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors">
            View all
        </button>
    );
}

// ─── Stat card content ─────────────────────────────────────────────────────────
const stats = [
    {
        label: "Total Revenue",
        value: "$48,290",
        change: "+12.4%",
        positive: true,
        icon: IconCurrency,
    },
    {
        label: "Active Users",
        value: "2,341",
        change: "+4.1%",
        positive: true,
        icon: IconUsers,
    },
    {
        label: "Conversion Rate",
        value: "3.2%",
        change: "-0.6%",
        positive: false,
        icon: IconTrendingUp,
    },
];

function StatsCard() {
    return (
        <Card title="Overview">
            <div className="space-y-5">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            className="flex items-center gap-4"
                        >
                            <div className="w-10 h-10 rounded-lg bg-amber-400/10 ring-1 ring-amber-400/20 flex items-center justify-center shrink-0">
                                <Icon className="w-5 h-5 text-amber-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-gray-500">
                                    {stat.label}
                                </p>
                                <p className="text-lg font-semibold text-white">
                                    {stat.value}
                                </p>
                            </div>
                            <span
                                className={[
                                    "text-xs font-medium px-2 py-1 rounded-full shrink-0",
                                    stat.positive
                                        ? "bg-emerald-400/10 text-emerald-400"
                                        : "bg-red-400/10 text-red-400",
                                ].join(" ")}
                            >
                                {stat.change}
                            </span>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}

// ─── Priority tasks card content ───────────────────────────────────────────────
const priorityTasks = [
    {
        title: "Fix checkout payment bug",
        due: "Due today",
        priority: "High" as const,
    },
    {
        title: "Review Q3 marketing report",
        due: "Due tomorrow",
        priority: "Medium" as const,
    },
    {
        title: "Update onboarding email copy",
        due: "Due in 3 days",
        priority: "Medium" as const,
    },
    {
        title: "Archive old client invoices",
        due: "Due next week",
        priority: "Low" as const,
    },
];

const priorityStyles: Record<string, string> = {
    High: "bg-red-400/10 text-red-400",
    Medium: "bg-amber-400/10 text-amber-400",
    Low: "bg-gray-400/10 text-gray-400",
};

function PriorityTasksCard() {
    return (
        <Card title="Priority Tasks" action={<ViewAllLink />}>
            <ul className="space-y-4">
                {priorityTasks.map((task) => (
                    <li key={task.title} className="flex items-start gap-3">
                        <span className="mt-1 w-7 h-7 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                            <IconFlag className="w-3.5 h-3.5 text-gray-400" />
                        </span>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-200 truncate">
                                {task.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                                {task.due}
                            </p>
                        </div>
                        <span
                            className={[
                                "text-xs font-medium px-2 py-1 rounded-full shrink-0",
                                priorityStyles[task.priority],
                            ].join(" ")}
                        >
                            {task.priority}
                        </span>
                    </li>
                ))}
            </ul>
        </Card>
    );
}

// ─── Unread messages card content ──────────────────────────────────────────────
const messages = [
    {
        name: "Sarah Lim",
        preview:
            "Hey, can you take a look at the latest mockups when you get a chance?",
        time: "2m",
        unread: true,
    },
    {
        name: "David Cruz",
        preview:
            "The client approved the proposal, moving forward with phase 2.",
        time: "1h",
        unread: true,
    },
    {
        name: "Anna Reyes",
        preview: "Reminder: standup moved to 10am tomorrow.",
        time: "3h",
        unread: false,
    },
    {
        name: "Marco Tan",
        preview: "Thanks for the quick turnaround on the report!",
        time: "Yesterday",
        unread: false,
    },
];

function MessagesCard() {
    return (
        <Card
            title="Messages"
            action={
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400">
                    2 new
                </span>
            }
        >
            <ul className="space-y-4">
                {messages.map((msg) => (
                    <li key={msg.name} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center shrink-0">
                            <span className="text-xs font-semibold text-gray-900">
                                {msg.name.charAt(0)}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-medium text-gray-200 truncate">
                                    {msg.name}
                                </p>
                                <span className="text-xs text-gray-500 shrink-0">
                                    {msg.time}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 truncate mt-0.5">
                                {msg.preview}
                            </p>
                        </div>
                        {msg.unread && (
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        )}
                    </li>
                ))}
            </ul>
        </Card>
    );
}

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div>
                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8 space-y-6">
                    <div>
                        <h1 className="text-lg font-semibold text-white">
                            Welcome back
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Here's what's happening with your account today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <StatsCard />
                        <PriorityTasksCard />
                        <MessagesCard />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
