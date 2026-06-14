import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";

// ─── Login form ───────────────────────────────────────────────────────────────
function LoginForm({
    canResetPassword,
    status,
    onSwitch,
}: {
    canResetPassword: boolean;
    status?: string;
    onSwitch: () => void;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("login"), { onFinish: () => reset("password") });
    };

    return (
        <div className="mx-auto w-full max-w-sm">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                    Welcome back
                </h1>
                <p className="mt-1.5 text-sm text-gray-500">
                    Sign in to your account to continue.
                </p>
            </div>

            {status && (
                <div className="mb-6 text-sm font-medium text-green-600 bg-green-50 rounded-lg px-4 py-3">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-5">
                <div>
                    <InputLabel htmlFor="login-email" value="Email" />
                    <TextInput
                        id="login-email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1.5 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-1.5" />
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <InputLabel htmlFor="login-password" value="Password" />
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>
                    <TextInput
                        id="login-password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1.5 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-1.5" />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) =>
                            setData(
                                "remember",
                                (e.target.checked || false) as false,
                            )
                        }
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {processing ? (
                        <svg
                            className="animate-spin w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                            />
                        </svg>
                    ) : (
                        "Sign in"
                    )}
                </button>

                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <button
                        type="button"
                        onClick={onSwitch}
                        className="text-gray-900 font-medium hover:underline"
                    >
                        Create one
                    </button>
                </p>
            </form>
        </div>
    );
}

// ─── Register form ────────────────────────────────────────────────────────────
function RegisterForm({ onSwitch }: { onSwitch: () => void }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <div className="mx-auto w-full max-w-sm">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                    Create an account
                </h1>
                <p className="mt-1.5 text-sm text-gray-500">
                    Get started with Breeze today.
                </p>
            </div>

            <form onSubmit={submit} className="space-y-5">
                <div>
                    <InputLabel htmlFor="reg-name" value="Name" />
                    <TextInput
                        id="reg-name"
                        name="name"
                        value={data.name}
                        className="mt-1.5 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-1.5" />
                </div>

                <div>
                    <InputLabel htmlFor="reg-email" value="Email" />
                    <TextInput
                        id="reg-email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1.5 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-1.5" />
                </div>

                <div>
                    <InputLabel htmlFor="reg-password" value="Password" />
                    <TextInput
                        id="reg-password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1.5 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-1.5" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="reg-password-confirm"
                        value="Confirm Password"
                    />
                    <TextInput
                        id="reg-password-confirm"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1.5 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-1.5"
                    />
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {processing ? (
                        <svg
                            className="animate-spin w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                            />
                        </svg>
                    ) : (
                        "Create account"
                    )}
                </button>

                <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <button
                        type="button"
                        onClick={onSwitch}
                        className="text-gray-900 font-medium hover:underline"
                    >
                        Sign in
                    </button>
                </p>
            </form>
        </div>
    );
}

// ─── Brand panel ──────────────────────────────────────────────────────────────
function BrandPanel({ mode }: { mode: "login" | "register" }) {
    return (
        <div className="hidden lg:flex flex-1 min-w-0 flex-col justify-between bg-gray-900 px-14 py-12 relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">B</span>
                </div>
                <span className="text-white/80 text-sm font-medium tracking-tight">
                    Breeze
                </span>
            </div>

            {/* Animated text block */}
            <div
                className="relative overflow-hidden"
                style={{ minHeight: "300px" }}
            >
                {/* Login copy */}
                <div
                    className={[
                        "absolute inset-0 flex flex-col justify-center space-y-6 transition-all duration-500 ease-in-out",
                        mode === "login"
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-6 pointer-events-none",
                    ].join(" ")}
                >
                    <div className="space-y-3">
                        <p className="text-white/40 text-xs font-medium tracking-widest uppercase">
                            Back on Track
                        </p>
                        <h2 className="text-white text-4xl font-semibold tracking-tight leading-tight">
                            Built to move
                            <br />
                            fast from day one.
                        </h2>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            React, TypeScript, Inertia, and Laravel — everything
                            wired up so you can skip the setup and start
                            building.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Laravel",
                            "Inertia",
                            "React",
                            "TypeScript",
                            "Tailwind",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Register copy */}
                <div
                    className={[
                        "absolute inset-0 flex flex-col justify-center space-y-6 transition-all duration-500 ease-in-out",
                        mode === "register"
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6 pointer-events-none",
                    ].join(" ")}
                >
                    <div className="space-y-3">
                        <p className="text-white/40 text-xs font-medium tracking-widest uppercase">
                            Get started
                        </p>
                        <h2 className="text-white text-4xl font-semibold tracking-tight leading-tight">
                            Your next project
                            <br />
                            starts here.
                        </h2>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Set up once, ship forever. Breeze gives you a solid
                            foundation so every project starts ahead.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Authentication",
                            "Sidebar",
                            "Dashboard",
                            "Dark mode ready",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative">
                <p className="text-white/25 text-xs">
                    &copy; {new Date().getFullYear()} Breeze. Your brand, your
                    rules.
                </p>
            </div>
        </div>
    );
}

// ─── Main export (replaces both Login.tsx and Register.tsx) ───────────────────
export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const [mode, setMode] = useState<"login" | "register">("login");

    return (
        <>
            <Head title={mode === "login" ? "Log in" : "Register"} />

            <div className="flex min-h-screen overflow-x-hidden">
                {/* Form panel — slides content internally */}
                <div className="flex flex-1 min-w-0 flex-col justify-center px-8 py-12 sm:px-12 lg:px-16 bg-white overflow-hidden">
                    <div
                        className="relative w-full"
                        style={{ minHeight: "480px" }}
                    >
                        {/* Login */}
                        <div
                            className={[
                                "absolute inset-0 flex items-center transition-all duration-500 ease-in-out",
                                mode === "login"
                                    ? "opacity-100 translate-x-0 pointer-events-auto"
                                    : "opacity-0 -translate-x-10 pointer-events-none",
                            ].join(" ")}
                        >
                            <LoginForm
                                canResetPassword={canResetPassword}
                                status={status}
                                onSwitch={() => setMode("register")}
                            />
                        </div>

                        {/* Register */}
                        <div
                            className={[
                                "absolute inset-0 flex items-center transition-all duration-500 ease-in-out",
                                mode === "register"
                                    ? "opacity-100 translate-x-0 pointer-events-auto"
                                    : "opacity-0 translate-x-10 pointer-events-none",
                            ].join(" ")}
                        >
                            <RegisterForm onSwitch={() => setMode("login")} />
                        </div>
                    </div>
                </div>

                {/* Brand panel — copy swaps with the mode */}
                <BrandPanel mode={mode} />
            </div>
        </>
    );
}
