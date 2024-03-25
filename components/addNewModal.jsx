import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";

const AddnewModal = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="addNew">
                        <p>Add new patient</p>
                        <span className="ml-2">
                            <CirclePlus />
                        </span>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add a new patient</DialogTitle>
                        <div className="flex-1">
                            <div className="space-y-6 mt-6">
                                <div className="w-2/12 space-y-2">
                                    <label htmlFor="picture">Picture</label>
                                    {/* <Input
                                                    id="picture"
                                                    type="file"
                                                    placeholder="haha"
                                                /> */}
                                    <Button variant="outline">Add </Button>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <div className="w-6/12">
                                        <label
                                            htmlFor="firstName"
                                            className="mb-3 font-semibold"
                                        >
                                            First name
                                        </label>
                                        <Input
                                            type="text"
                                            id="firstName"
                                            placeholder="Babarra"
                                            className="p-6 bg-sky-100"
                                        />
                                    </div>
                                    <div className="w-6/12">
                                        <label
                                            htmlFor="lastName"
                                            className="mb-3 font-semibold"
                                        >
                                            Last name
                                        </label>
                                        <Input
                                            type="text"
                                            id="lastName"
                                            placeholder="Anderson"
                                            className="p-6 bg-sky-100"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <div className="w-6/12">
                                        <label
                                            htmlFor="email"
                                            className="mb-3 font-semibold"
                                        >
                                            Email
                                        </label>
                                        <Input
                                            type="text"
                                            id="email"
                                            placeholder="Babarra"
                                            className="p-6 bg-sky-100"
                                        />
                                    </div>
                                    <div className="w-6/12">
                                        <label
                                            htmlFor="phone"
                                            className="mb-3 font-semibold"
                                        >
                                            Phone number
                                        </label>
                                        <Input
                                            type="text"
                                            id="phone"
                                            placeholder="09314422211"
                                            className="p-6 bg-sky-100"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="w-full space-y-4">
                                        <label
                                            htmlFor="address"
                                            className=" font-semibold"
                                        >
                                            Address
                                        </label>
                                        <Input
                                            type="text"
                                            id="address"
                                            placeholder="123 Main street"
                                            className="p-6 bg-sky-100"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-5/12">
                                            <Input
                                                className="p-6 bg-sky-100"
                                                type="text"
                                                id="city"
                                                placeholder="HCM"
                                            />
                                        </div>
                                        <div className="w-5/12">
                                            <Input
                                                className="p-6 bg-sky-100"
                                                type="text"
                                                id="province"
                                                placeholder="State / province"
                                            />
                                        </div>
                                        <div className="w-2/12">
                                            <Input
                                                className="p-6 bg-sky-100"
                                                type="text"
                                                id="zipCode"
                                                placeholder="Zip code"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogHeader>
                    <DialogFooter className="mt-3 flex items-center gap-3">
                        <DialogClose asChild>
                            <Button variant="secondary">Close</Button>
                        </DialogClose>
                        <Button variant="addNew">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default AddnewModal;
