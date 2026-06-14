import {
    createContext,
    useContext,
    useEffect,
    useState,
    PropsWithChildren,
} from "react";

interface SidebarContextType {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState<boolean>(() => {
        if (typeof window === "undefined") return true;
        const stored = localStorage.getItem("sidebar_open");
        return stored !== null ? stored === "true" : true;
    });

    useEffect(() => {
        localStorage.setItem("sidebar_open", String(isOpen));
    }, [isOpen]);

    const toggle = () => setIsOpen((prev) => !prev);
    const close = () => setIsOpen(false);

    return (
        <SidebarContext.Provider value={{ isOpen, toggle, close }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const ctx = useContext(SidebarContext);
    if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
    return ctx;
}
