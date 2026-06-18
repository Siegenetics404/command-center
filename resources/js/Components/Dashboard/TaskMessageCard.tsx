import { useState } from "react";
import { Flag, Mail, CheckCheck } from "lucide-react";
import { initialTasks, initialMessages } from "@/types/data";
import TaskList from "./TaskList";
import MessageList from "./MessageList";

export default function TaskMessagesCard() {
    const [tab, setTab] = useState<"tasks" | "messages">("tasks");
    const [tasks, setTasks] = useState(initialTasks);
    const [messages, setMessages] = useState(initialMessages);

    const completeTask = (id: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    const toggleRead = (id: string) => {
        setMessages((prev) =>
            prev.map((m) => (m.id === id ? { ...m, read: !m.read } : m)),
        );
    };

    const deleteMessage = (id: string) => {
        setMessages((prev) => prev.filter((m) => m.id !== id));
    };

    const clearMessages = () => setMessages([]);

    const unreadCount = messages.filter((m) => !m.read).length;

    return (
        <div className="rounded-lg bg-gray-900 border border-gray-800">
            <div className="flex items-center justify-between px-3 pt-3">
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setTab("tasks")}
                        className={`flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-md transition-colors ${
                            tab === "tasks"
                                ? "bg-gray-800 text-white"
                                : "text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        <Flag className="w-3.5 h-3.5" />
                        Priority tasks
                        {tasks.length > 0 && (
                            <span className="text-[10px] font-semibold bg-gray-700 text-gray-300 rounded-full px-1.5 py-0.5">
                                {tasks.length}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setTab("messages")}
                        className={`flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-md transition-colors ${
                            tab === "messages"
                                ? "bg-gray-800 text-white"
                                : "text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        <Mail className="w-3.5 h-3.5" />
                        Unread messages
                        {unreadCount > 0 && (
                            <span className="text-[10px] font-semibold bg-amber-400/20 text-amber-400 rounded-full px-1.5 py-0.5">
                                {unreadCount}
                            </span>
                        )}
                    </button>
                </div>
                {tab === "messages" && messages.length > 0 && (
                    <button
                        onClick={clearMessages}
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors mr-2"
                    >
                        <CheckCheck className="w-3.5 h-3.5" />
                        Clear all
                    </button>
                )}
            </div>

            <div className="px-5 py-4">
                {tab === "tasks" ? (
                    <TaskList tasks={tasks} onComplete={completeTask} />
                ) : (
                    <MessageList
                        messages={messages}
                        onToggleRead={toggleRead}
                        onDelete={deleteMessage}
                    />
                )}
            </div>
        </div>
    );
}
