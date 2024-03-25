import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import Link from "next/link";
const DashboardLayout = ({ children }) => {
    return (
        <div className="h-full relative screen-max-width ">
            {/* <div className="flex items-center  bg-slate-50">
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
                    <main className="flex-1 flex flex-col bg-slate-50 border-2 hover:border-sky-400">
                        {children}
                    </main>
                </div>
            </div> */}
            <div className="h-full flex">
                <div className=" flex flex-col items-center w-1/12 bg-[#B5C0D0]">
                    <Link
                        href="/"
                        className=" w-full h-28 flex justify-center items-center border border-slate-200"
                    >
                        <Image
                            src={Logo}
                            width={60}
                            height={60}
                            alt="Picture of the author"
                        />
                    </Link>
                    <div className=" flex-1 w-28 mt-10">
                        <SideBar />
                    </div>
                </div>
                <main className="flex-1 h-full bg-[#F9F5F6]">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
