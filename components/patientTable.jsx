"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CircleUserRound, Pencil } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";

const PatientTable = () => {
    const router = useRouter();
    const handleEdit = (event) => {
        alert("edit");

        event.stopPropagation();
    };

    const redirectToPatientDetail = (patientId) => {
        router.push(`/patients/${patientId}`);
    };

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] flex justify-center items-center">
                            <CircleUserRound />
                        </TableHead>
                        <TableHead className="w-[200px]">Name</TableHead>
                        <TableHead className="w-[250px]">Email</TableHead>
                        <TableHead className="w-[250px]">Phone</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead className="w-[50px]">Edit</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* mapping data */}
                    <TableRow onClick={() => redirectToPatientDetail(1)}>
                        <TableCell className="flex items-center justify-center ">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>Thuan</TableCell>
                        <TableCell className="text-wrap">
                            Truongthuan21342@fgmail.com
                        </TableCell>
                        <TableCell>093144221</TableCell>
                        <TableCell className="m-w-[250px] overflow-hidden">
                            123 abc TanBinh Dictric Ho Chi Minh city Ho Chi Minh
                            city Ho Chi Minh city
                        </TableCell>
                        <TableCell>
                            <div
                                className="cursor-pointer"
                                onClick={(e) => handleEdit(e)}
                            >
                                <Pencil />
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow onClick={() => redirectToPatientDetail(1)}>
                        <TableCell className="flex items-center justify-center">
                            <Avatar>
                                <AvatarImage src="https://source.unsplash.com/random" />
                                <AvatarFallback>User</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>Thuan</TableCell>
                        <TableCell className="text-wrap">
                            Truongthuan21342@fgmail.com
                        </TableCell>
                        <TableCell>093144221</TableCell>
                        <TableCell className="m-w-[250px] overflow-hidden">
                            123 abc TanBinh Dictric Ho Chi Minh city Ho Chi Minh
                            city Ho Chi Minh city
                        </TableCell>
                        <TableCell>
                            <div
                                className="cursor-pointer"
                                onClick={(e) => handleEdit(e)}
                            >
                                <Pencil />
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow onClick={() => redirectToPatientDetail(1)}>
                        <TableCell className="flex items-center justify-center">
                            <Avatar>
                                <AvatarImage src="https://source.unsplash.com/random" />
                                <AvatarFallback>User</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>Thuan</TableCell>
                        <TableCell className="text-wrap">
                            Truongthuan21342@fgmail.com
                        </TableCell>
                        <TableCell>093144221</TableCell>
                        <TableCell className="m-w-[250px] overflow-hidden">
                            123 abc TanBinh Dictric Ho Chi Minh city Ho Chi Minh
                            city Ho Chi Minh city
                        </TableCell>
                        <TableCell>
                            <div
                                className="cursor-pointer"
                                onClick={(e) => handleEdit(e)}
                            >
                                <Pencil />
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow onClick={() => redirectToPatientDetail(1)}>
                        <TableCell className="flex items-center justify-center">
                            <Avatar>
                                <AvatarImage src="https://source.unsplash.com/random" />
                                <AvatarFallback>User</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>Thuan</TableCell>
                        <TableCell className="text-wrap">
                            Truongthuan21342@fgmail.com
                        </TableCell>
                        <TableCell>093144221</TableCell>
                        <TableCell className="m-w-[250px] overflow-hidden">
                            123 abc TanBinh Dictric Ho Chi Minh city Ho Chi Minh
                            city Ho Chi Minh city
                        </TableCell>
                        <TableCell>
                            <div
                                className="cursor-pointer"
                                onClick={(e) => handleEdit(e)}
                            >
                                <Pencil />
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow onClick={() => redirectToPatientDetail(1)}>
                        <TableCell className="flex items-center justify-center">
                            <Avatar>
                                <AvatarImage src="https://source.unsplash.com/random" />
                                <AvatarFallback>User</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>Thuan</TableCell>
                        <TableCell className="text-wrap">
                            Truongthuan21342@fgmail.com
                        </TableCell>
                        <TableCell>093144221</TableCell>
                        <TableCell className="m-w-[250px] overflow-hidden">
                            123 abc TanBinh Dictric Ho Chi Minh city Ho Chi Minh
                            city Ho Chi Minh city
                        </TableCell>
                        <TableCell>
                            <div
                                className="cursor-pointer"
                                onClick={(e) => handleEdit(e)}
                            >
                                <Pencil />
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};

export default PatientTable;
