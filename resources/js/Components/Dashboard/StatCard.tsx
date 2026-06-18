import { Stat } from "@/types/types";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";

export default function StatCard({
    label,
    value,
    delta,
    note,
    trend,
    icon: Icon,
}: Stat) {
    const color =
        trend === "up"
            ? "text-emerald-400"
            : trend === "down"
              ? "text-red-400"
              : "text-red-400";
    const TrendIcon =
        trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Clock;

    return (
        <div className="relative rounded-lg bg-gray-900 border border-gray-800 px-5 py-5">
            <span className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-md bg-white">
                <Icon className="w-4 h-4 text-gray-900" />
            </span>
            <p className="text-xs font-medium text-gray-300 tracking-wide uppercase pr-12">
                {label}
            </p>
            <p className="mt-3 text-2xl font-semibold text-white tabular-nums">
                {value}
            </p>
            <div className="mt-2 flex items-center gap-1.5">
                <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold tabular-nums ${color}`}
                >
                    <TrendIcon className="w-3 h-3" />
                    {delta}
                </span>
                <span className="text-xs text-gray-400">{note}</span>
            </div>
        </div>
    );
}
