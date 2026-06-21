export default function LiveBadge() {
    return (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full tracking-wider uppercase">
            <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            Live
        </span>
    );
}
