import { usePage } from "@inertiajs/react";
import LiveBadge from "./LiveBadge";
import { getGreeting } from "@/types/getGreeting";

export default function DashboardGreeting() {
    const { auth } = usePage().props as unknown as {
        auth: { user: { name: string } };
    };

    const now = new Date();
    const dateLabel = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    const greeting = getGreeting(now.getHours());
    const firstName = auth.user.name.split(" ")[0];

    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-lg font-semibold text-white">
                    Welcome back
                </h1>
                <p className="text-xs font-medium text-gray-400 tracking-wide mt-1">
                    {dateLabel} · {greeting}, {firstName}
                </p>
            </div>
            <LiveBadge />
        </div>
    );
}
