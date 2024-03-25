import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
const DashboardLayout = ({ children }) => {
    return (
        <div className="h-full relative screen-max-width ">
            <div className="flex items-center  bg-slate-50">
                <div className=" flex w-28 h-28 justify-center items-center border-2 border-slate-300/50">
                    <Image
                        src={Logo}
                        width={60}
                        height={60}
                        alt="Picture of the author"
                    />
                </div>
                <div className="w-full flex-1">
                    <Navbar />
                </div>
            </div>
            <div className="h-screen">
                <div className="flex h-full">
                    <div className="w-28 mt-10">
                        <SideBar />
                    </div>
                    <main className="flex-1 flex flex-col bg-slate-50 border-2 hover:border-sky-400 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
