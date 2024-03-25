import { CirclePlus, Search } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <header className="w-full h-full px-8 flex items-center justify-between">
            <h1 className="text-lg font-semibold tracking-wider flex-1">
                Bệnh nhân
            </h1>
            <div className="flex items-center flex-4 space-x-5">
                <Button variant="addNew">
                    Add new patient
                    <span className="ml-2">
                        <CirclePlus />
                    </span>
                </Button>
                <div className="w-12 h-12 flex items-center justify-center border-2 rounded-full bg-stone-50 cursor-pointer">
                    <Search />
                </div>
                <div className="w-14 h-14 rounded-full border-2 -border-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="https://th.bing.com/th/id/OIP.fmLeWCb8UTJHF2DMEyY8lAHaEL?rs=1&pid=ImgDetMain"
                        alt="avatar"
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
