import { Filter } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import PatientTable from "@/components/patientTable";

const PatientsPage = () => {
    return (
        <div>
            <header className="w-full container flex justify-between items-center px-8 py-8  ">
                <div className="font-semibold">total: 10 patients</div>

                <div className="filter-section flex space-x-10">
                    <Select>
                        <SelectTrigger className="w-[160px] rounded-full">
                            <SelectValue placeholder="Sort By:" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Date Created</SelectItem>
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
    );
};

export default PatientsPage;
