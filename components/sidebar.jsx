"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, Settings, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
    {
        title: "dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        title: "dashboard",
        icon: UserRound,
        path: "/patients",
    },
    {
        title: "dashboard",
        icon: LayoutDashboard,
        path: "/appointment",
    },
    {
        title: "dashboard",
        icon: Settings,
        path: "/settings",
    },
];

const SideBar = () => {
    const urlPath = usePathname();

    return (
        <div className="space-y-6 flex flex-col items-center justify-center">
            {routes.map((item, index) => (
                <Link
                    href={item.path}
                    key={item.path}
                    className={cn(
                        "w-14 h-14 flex justify-center items-center rounded-full border-2 hover:border-gray-200 hover:bg-[#7743DB]/90 group transition",
                        urlPath === item.path ? "bg-[#7743DB]/90" : ""
                    )}
                >
                    <item.icon
                        className={cn(
                            "w-4 h-4 text-neutral-400 group-hover:text-white  "
                        )}
                    />
                </Link>
            ))}
        </div>
    );
};

export default SideBar;
