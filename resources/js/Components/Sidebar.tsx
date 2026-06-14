import { useSidebar } from "@/Components/SidebarContext";
import { Link, router } from "@inertiajs/react";

interface NavItem {
    label: string;
    href: string;
    routeName: string;
    icon: React.ReactNode;
}

const navItems: NavItem[] = [
    {
        label: "Dashboard",
        href: route("dashboard"),
        routeName: "dashboard",
        icon: (
            <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
        ),
    },
    // Add more nav items here
];

function IconCollapse() {
    return (
        <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
            />
        </svg>
    );
}

function IconExpand() {
    return (
        <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
            />
        </svg>
    );
}

export default function Sidebar() {
    const { isOpen, toggle, close } = useSidebar();

    return (
        <>
            {/* Mobile overlay */}
            <div
                className={[
                    "fixed inset-0 z-20 bg-black/30 backdrop-blur-sm transition-opacity duration-200 sm:hidden",
                    isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none",
                ].join(" ")}
                onClick={close}
                aria-hidden="true"
            />

            {/* Sidebar panel */}
            <aside
                className={[
                    "fixed z-30 top-0 left-0 h-full flex flex-col bg-white border-r border-gray-100",
                    "transition-[width] duration-200 ease-in-out overflow-hidden",
                    isOpen ? "w-64" : "w-0 sm:w-14",
                ].join(" ")}
            >
                <div className="flex flex-col h-full w-64">
                    {/* Header */}
                    <div className="flex items-center h-16 px-3 border-b border-gray-100 shrink-0">
                        <Link
                            href="/"
                            tabIndex={isOpen ? 0 : -1}
                            className={[
                                "flex items-center gap-2 flex-1 min-w-0 transition-opacity duration-150",
                                isOpen
                                    ? "opacity-100"
                                    : "opacity-0 pointer-events-none",
                            ].join(" ")}
                        >
                            <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center shrink-0">
                                <span className="text-white text-xs font-semibold">
                                    B
                                </span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 tracking-tight truncate">
                                Breeze
                            </span>
                        </Link>

                        <button
                            onClick={toggle}
                            title={
                                isOpen ? "Collapse sidebar" : "Expand sidebar"
                            }
                            className={[
                                "hidden sm:flex items-center justify-center w-8 h-8 rounded-lg",
                                "text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors shrink-0",
                                !isOpen && "absolute left-3",
                            ].join(" ")}
                            aria-label={
                                isOpen ? "Collapse sidebar" : "Expand sidebar"
                            }
                        >
                            {isOpen ? <IconCollapse /> : <IconExpand />}
                        </button>
                    </div>

                    {/* Nav */}
                    <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto overflow-x-hidden">
                        {navItems.map((item) => {
                            const isActive = route().current(item.routeName);
                            return (
                                <Link
                                    key={item.routeName}
                                    href={item.href}
                                    title={!isOpen ? item.label : undefined}
                                    className={[
                                        "flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-colors",
                                        isActive
                                            ? "bg-gray-100 text-gray-900 font-medium"
                                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-50",
                                    ].join(" ")}
                                >
                                    <span
                                        className={
                                            isActive
                                                ? "text-gray-900 shrink-0"
                                                : "text-gray-400 shrink-0"
                                        }
                                    >
                                        {item.icon}
                                    </span>
                                    <span
                                        className={[
                                            "truncate transition-opacity duration-150",
                                            isOpen
                                                ? "opacity-100"
                                                : "opacity-0",
                                        ].join(" ")}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Bottom — logout only */}
                    <div className="px-2 py-3 border-t border-gray-100 shrink-0">
                        <button
                            onClick={() => router.post(route("logout"))}
                            title={!isOpen ? "Log out" : undefined}
                            className="flex w-full items-center gap-3 px-2 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                            <svg
                                className="w-5 h-5 shrink-0 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                            <span
                                className={[
                                    "transition-opacity duration-150",
                                    isOpen ? "opacity-100" : "opacity-0",
                                ].join(" ")}
                            >
                                Log out
                            </span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Spacer */}
            <div
                className={[
                    "shrink-0 transition-[width] duration-200 ease-in-out",
                    isOpen ? "w-64" : "w-0 sm:w-14",
                ].join(" ")}
                aria-hidden="true"
            />
        </>
    );
}
