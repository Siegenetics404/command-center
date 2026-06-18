import { Check } from "lucide-react";
import { Task } from "@/types/types";
import { priorityStyles } from "@/types/data";

export default function TaskList({
    tasks,
    onComplete,
}: {
    tasks: Task[];
    onComplete: (id: string) => void;
}) {
    if (tasks.length === 0) {
        return (
            <p className="text-sm text-gray-500 py-6 text-center">
                All caught up. No priority tasks left.
            </p>
        );
    }

    return (
        <ul className="divide-y divide-gray-800">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="group flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                >
                    <button
                        onClick={() => onComplete(task.id)}
                        aria-label="Mark task as done"
                        className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-600 text-transparent hover:border-emerald-400 hover:text-emerald-400 transition-colors shrink-0"
                    >
                        <Check className="w-3 h-3" />
                    </button>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-200 truncate">
                            {task.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                            {task.due}
                        </p>
                    </div>
                    <span
                        className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${
                            priorityStyles[task.priority]
                        }`}
                    >
                        {task.priority}
                    </span>
                </li>
            ))}
        </ul>
    );
}
