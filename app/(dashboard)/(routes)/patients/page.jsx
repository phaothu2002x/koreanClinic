"use client";

import { Filter, Search } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import PatientTable from "@/components/patientTable";

import AddnewModal from "../../../../components/addNewModal";

const PatientsPage = () => {
    const handleAddNewPatient = () => {};

    return (
        <div className="h-full flex flex-col">
            <div className="w-full py-7 px-8 flex items-center justify-between">
                <h1 className="text-lg font-semibold tracking-wider flex-1">
                    Patients List
                </h1>
                <div className="flex items-center flex-4 space-x-5">
                    <AddnewModal />

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
            </div>
            <div className="h-full border-2 hover:border-sky-400">
                <header className="w-full container flex justify-between items-center px-8 py-8  ">
                    <div className="font-semibold">total: 10 patients</div>
                    <div className="filter-section flex space-x-10">
                        <Select>
                            <SelectTrigger className="w-[160px] rounded-full">
                                <SelectValue placeholder="Sort By:" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">
                                    Date Created
                                </SelectItem>
                                <SelectItem value="dark">Name</SelectItem>
                                <SelectItem value="system">Email</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button variant="outline" className="rounded-full">
                            Filter
                            <span className="ml-2">
                                <Filter />
                            </span>
                        </Button>
                    </div>
                </header>
                <div className="container">
                    <PatientTable />
                </div>
            </div>
        </div>
    );
};

export default PatientsPage;
