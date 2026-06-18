import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DashboardGreeting from "@/Components/Dashboard/DashboardGreeting";
import StatsGrid from "@/Components/Dashboard/StatsGrid";
import TaskMessagesCard from "@/Components/Dashboard/TaskMessageCard";

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
                    <DashboardGreeting />
                    <StatsGrid />
                    <TaskMessagesCard />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
