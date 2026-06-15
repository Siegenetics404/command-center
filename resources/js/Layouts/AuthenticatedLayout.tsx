import Sidebar from "@/Components/Sidebar";
import { SidebarProvider, useSidebar } from "@/Components/SidebarContext";
import Dropdown from "@/Components/Dropdown";
import { Link, router, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode } from "react";

function LayoutInner({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const { toggle } = useSidebar();
    const user = usePage().props.auth.user;

    return (
        <div className="flex min-h-screen bg-gray-950">
            <Sidebar />

            <div className="flex flex-col flex-1 min-w-0">
                {/* Topbar */}
                <header className="flex items-center h-16 px-5 gap-3 bg-gray-900 border-b border-gray-800 shrink-0">
                    {/* Mobile-only hamburger — desktop uses the sidebar's own toggle */}
                    <button
                        onClick={toggle}
                        className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors shrink-0"
                        aria-label="Open sidebar"
                    >
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Page title */}
                    <div className="flex-1 text-sm font-medium text-white">
                        {header ?? "Dashboard"}
                    </div>

                    {/* Avatar + dropdown */}
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button
                                type="button"
                                className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-gray-800 transition-colors focus:outline-none"
                            >
                                {/* Avatar circle */}
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center shrink-0">
                                    <span className="text-xs font-semibold text-gray-900">
                                        {user.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>

                                {/* Name + caret — hidden on small screens */}
                                <span className="hidden sm:block text-sm font-medium text-gray-300">
                                    {user.name}
                                </span>
                                <svg
                                    className="hidden sm:block w-3.5 h-3.5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </Dropdown.Trigger>

                        <Dropdown.Content
                            align="right"
                            width="48"
                            contentClasses="py-1 bg-gray-900 border border-gray-700 shadow-xl shadow-black/40"
                        >
                            {/* User info header */}
                            <div className="px-4 py-3 border-b border-gray-800">
                                <p className="text-sm font-medium text-white truncate">
                                    {user.name}
                                </p>
                                <p className="text-xs text-gray-500 truncate mt-0.5">
                                    {user.email}
                                </p>
                            </div>

                            <Dropdown.Link
                                href={route("profile.edit")}
                                className="!text-gray-300 hover:!bg-gray-800 hover:!text-white focus:!bg-gray-800"
                            >
                                Profile
                            </Dropdown.Link>

                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="!text-gray-300 hover:!bg-gray-800 hover:!text-white focus:!bg-gray-800"
                            >
                                Log out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6 overflow-auto">{children}</main>
            </div>
        </div>
    );
}

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <SidebarProvider>
            <LayoutInner header={header}>{children}</LayoutInner>
        </SidebarProvider>
    );
}
