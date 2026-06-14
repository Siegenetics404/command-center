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
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />

            <div className="flex flex-col flex-1 min-w-0">
                {/* Topbar */}
                <header className="flex items-center h-16 px-5 gap-3 bg-white border-b border-gray-100 shrink-0">
                    {/* Mobile-only hamburger — desktop uses the sidebar's own toggle */}
                    <button
                        onClick={toggle}
                        className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors shrink-0"
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
                    <div className="flex-1 text-sm font-medium text-gray-900">
                        {header ?? "Dashboard"}
                    </div>

                    {/* Avatar + dropdown */}
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button
                                type="button"
                                className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-gray-100 transition-colors focus:outline-none"
                            >
                                {/* Avatar circle */}
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                                    <span className="text-xs font-medium text-gray-600">
                                        {user.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>

                                {/* Name + caret — hidden on small screens */}
                                <span className="hidden sm:block text-sm font-medium text-gray-700">
                                    {user.name}
                                </span>
                                <svg
                                    className="hidden sm:block w-3.5 h-3.5 text-gray-400"
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

                        <Dropdown.Content align="right" width="48">
                            {/* User info header */}
                            <div className="px-4 py-3 border-b border-gray-100">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {user.name}
                                </p>
                                <p className="text-xs text-gray-400 truncate mt-0.5">
                                    {user.email}
                                </p>
                            </div>

                            <Dropdown.Link href={route("profile.edit")}>
                                Profile
                            </Dropdown.Link>

                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
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
