import { Message } from "@/types/types";
import { Check, X } from "lucide-react";

export default function MessageList({
    messages,
    onToggleRead,
    onDelete,
}: {
    messages: Message[];
    onToggleRead: (id: string) => void;
    onDelete: (id: string) => void;
}) {
    if (messages.length === 0) {
        return (
            <p className="text-sm text-gray-500 py-6 text-center">
                Inbox cleared. No messages to show.
            </p>
        );
    }

    return (
        <ul className="divide-y divide-gray-800">
            {messages.map((msg) => (
                <li
                    key={msg.id}
                    className="group flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                >
                    <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            msg.read ? "bg-transparent" : "bg-amber-400"
                        }`}
                    />
                    <div className="flex-1 min-w-0">
                        <p
                            className={`text-sm truncate ${
                                msg.read
                                    ? "text-gray-500"
                                    : "text-gray-200 font-medium"
                            }`}
                        >
                            {msg.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate mt-0.5">
                            {msg.preview}
                        </p>
                    </div>
                    <span className="text-xs text-gray-500 shrink-0">
                        {msg.time}
                    </span>
                    <div className="hidden group-hover:flex items-center gap-1 shrink-0">
                        <button
                            onClick={() => onToggleRead(msg.id)}
                            aria-label={
                                msg.read ? "Mark as unread" : "Mark as read"
                            }
                            className="p-1 rounded text-gray-500 hover:text-emerald-400 hover:bg-gray-800 transition-colors"
                        >
                            <Check className="w-3.5 h-3.5" />
                        </button>
                        <button
                            onClick={() => onDelete(msg.id)}
                            aria-label="Delete message"
                            className="p-1 rounded text-gray-500 hover:text-red-400 hover:bg-gray-800 transition-colors"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
