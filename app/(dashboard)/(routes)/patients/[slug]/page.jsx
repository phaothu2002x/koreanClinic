"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dot, PencilLine, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

const PatientDetail = (props) => {
    return (
        <div className="p-8 flex gap-6">
            <div className="flex-1">
                <div className="relative h-[180px] w-full bg-[url('https://images.unsplash.com/photo-1561212044-bac5ef688a07?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] object-cover rounded-lg">
                    <div className="absolute bottom-6 left-6 ">
                        <div>
                            <Avatar className="w-[80px] h-[80px]">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="absolute -right-2 bottom-[2px]">
                            <Button className="w-8 h-8 flex items-center justify-center rounded-full primary-bg group hover:bg-[#7743db]/90">
                                <div>
                                    <PencilLine
                                        strokeWidth={0.75}
                                        size={26}
                                        className="group-hover:text-[#fff]/90"
                                    />
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className="absolute right-8 bottom-6">
                        <Button
                            variant="outline"
                            size="icon"
                            className="flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-100/80"
                        >
                            <Trash2
                                size={28}
                                color="#000000"
                                strokeWidth={1.25}
                            />
                        </Button>
                    </div>
                </div>
                <div className="space-y-6 mt-6">
                    <div className="flex justify-between gap-4">
                        <div className="w-6/12">
                            <label
                                for="firstName"
                                className="mb-3 font-semibold"
                            >
                                First name
                            </label>
                            <Input
                                type="text"
                                id="firstName"
                                placeholder="Babarra"
                                className="p-6 bg-sky-100"
                                disabled="true"
                            />
                        </div>
                        <div className="w-6/12">
                            <label
                                for="lastName"
                                className="mb-3 font-semibold"
                            >
                                Last name
                            </label>
                            <Input
                                type="text"
                                id="lastName"
                                placeholder="Anderson"
                                className="p-6 bg-sky-100"
                                disabled="true"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="w-6/12">
                            <label for="email" className="mb-3 font-semibold">
                                Email
                            </label>
                            <Input
                                type="text"
                                id="email"
                                placeholder="Babarra"
                                className="p-6 bg-sky-100"
                                disabled="true"
                            />
                        </div>
                        <div className="w-6/12">
                            <label for="phone" className="mb-3 font-semibold">
                                Phone number
                            </label>
                            <Input
                                type="text"
                                id="phone"
                                placeholder="09314422211"
                                className="p-6 bg-sky-100"
                                disabled="true"
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="w-full space-y-4">
                            <label for="address" className=" font-semibold">
                                Address
                            </label>
                            <Input
                                type="text"
                                id="address"
                                placeholder="123 Main street"
                                className="p-6 bg-sky-100"
                                disabled="true"
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="w-5/12">
                                <Input
                                    className="p-6 bg-sky-100"
                                    type="text"
                                    id="city"
                                    placeholder="HCM"
                                    disabled="true"
                                />
                            </div>
                            <div className="w-5/12">
                                <Input
                                    className="p-6 bg-sky-100"
                                    type="text"
                                    id="province"
                                    placeholder="State / province"
                                    disabled="true"
                                />
                            </div>
                            <div className="w-2/12">
                                <Input
                                    className="p-6 bg-sky-100"
                                    type="text"
                                    id="zipCode"
                                    placeholder="Zip code"
                                    disabled="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside className="w-4/12 space-y-5">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold">Patients Recently</h2>
                    <Button
                        variant="outline"
                        size="icon"
                        className="flex items-center justify-center rounded-full  primary-bg hover:bg-[#7743db]/90"
                    >
                        <Plus size={28} color="#fff" strokeWidth={1.25} />
                    </Button>
                </div>
                <div className="space-y-5">
                    {/* mapping data */}
                    <div>
                        <Link href="#">
                            <div className="flex rounded-md  items-center gap-4">
                                {/* <div className="w-2 h-2 rounded-full flex items-center "> */}
                                <Avatar>
                                    <AvatarImage src="https://mighty.tools/mockmind-api/content/cartoon/7.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                {/* </div> */}
                                <div className="space-y-1">
                                    <h4 className="font-semibold">
                                        123 Main Street, Anytown, USA
                                    </h4>
                                    <p className="flex items-center gap-[1px]">
                                        <span className="font-extralight text-neutral-500">
                                            Nov 14, 9:00
                                        </span>
                                        <span>
                                            <Dot
                                                size={24}
                                                color="#7e7c7c"
                                                strokeWidth={1}
                                            />
                                        </span>
                                        <span className="font-extralight text-neutral-500">
                                            $6000
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="#">
                            <div className="flex rounded-md items-center gap-4">
                                {/* <div className="w-2 h-2 rounded-full flex items-center "> */}
                                <Avatar>
                                    <AvatarImage src="https://mighty.tools/mockmind-api/content/human/43.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                {/* </div> */}
                                <div className="space-y-1">
                                    <h4 className="font-semibold">
                                        456 Elm Avenue, Somewhereville, Canada
                                    </h4>
                                    <p className="flex items-center gap-[1px]">
                                        <span className="font-extralight text-neutral-500">
                                            Nov 14, 9:00
                                        </span>
                                        <span>
                                            <Dot
                                                size={24}
                                                color="#7e7c7c"
                                                strokeWidth={1}
                                            />
                                        </span>
                                        <span className="font-extralight text-neutral-500">
                                            $6000
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="#">
                            <div className="flex  rounded-md items-center gap-4">
                                {/* <div className="w-2 h-2 rounded-full flex items-center "> */}
                                <Avatar>
                                    <AvatarImage src="https://mighty.tools/mockmind-api/content/human/65.jpg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                {/* </div> */}
                                <div className="space-y-1">
                                    <h4 className="font-semibold">
                                        789 Oak Lane, Nowhere City, Australia
                                    </h4>
                                    <p className="flex items-center gap-[1px]">
                                        <span className="font-extralight text-neutral-500">
                                            Nov 14, 9:00
                                        </span>
                                        <span>
                                            <Dot
                                                size={24}
                                                color="#7e7c7c"
                                                strokeWidth={1}
                                            />
                                        </span>
                                        <span className="font-extralight text-neutral-500">
                                            $6000
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button
                        variant="link"
                        className="font-extralight text-sky-500"
                    >
                        Show more
                    </Button>
                </div>
            </aside>
        </div>
    );
};

export default PatientDetail;
