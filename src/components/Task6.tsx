import { useForm } from "react-hook-form";
import { useState } from "react";
import type { IFormValues } from "../interface/formValues";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Task6 = () => {
    const [userEntry, setUserEntries] = useState<IFormValues[]>([
        { inputText: "", userInfo: "" },
    ]);

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
        reset
    } = useForm();


    const handleAddRow = () => {
        setUserEntries([...userEntry, { inputText: "", userInfo: "" }]);
        toast.success("Row is added")
    };

    const handleDeleteRow = (index: number) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    setUserEntries(userEntry.filter((_, i) => i !== index));
                    Swal.fire({
                        title: "Deleted!",
                        text: "Row has been deleted.",
                        icon: "success"
                    });
                }
    
            });
        };

    const handleInputChange = (index: number, field: keyof IFormValues, value: string) => {
        const updatedInfo = [...userEntry];
        updatedInfo[index][field] = value;
        setUserEntries(updatedInfo);
    };

    const onSubmit = () => {
        const values = getValues();
        const data = userEntry.map((_, index) => ({
            inputText: values[`inputText-${index}`],
            userInfo: values[`userInfo-${index}`],
        }));
        Swal.fire({
            title: "Data Submitted",
            text: data.map(item => `Text: ${item.inputText}, Info: ${item.userInfo}`).join('\n'),
            icon: "success",
        });
        reset()
        setUserEntries([{ inputText: "", userInfo: "" }]);

    };

    return (
        <div>
            <h1 className="font-bold text-2xl text-center mb-5 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">Task-6</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-10">
                {userEntry.map((personInfo, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <div className="flex gap-4 items-center">
                            <input
                                value={personInfo.inputText}
                                placeholder="Enter text"
                                {...register(`inputText-${index}`, {
                                    required: "Text is required",
                                    onChange: (e) => {
                                        handleInputChange(index, "inputText", e.target.value);
                                    },
                                })}
                                className={`border rounded px-4 py-2 w-full ${errors[`inputText-${index}`] ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            <select
                                value={personInfo.userInfo}
                                {...register(`userInfo-${index}`, {
                                    required: "Please select a role",
                                    onChange: (e) => {
                                        handleInputChange(index, "userInfo", e.target.value);
                                    },
                                })}
                                className={`border rounded px-4 py-2 w-full ${errors[`userInfo-${index}`] ? "border-red-500" : "border-gray-300"
                                    }`}
                            >
                                <option value="">Select info</option>
                                <option value="doctor">Doctor</option>
                                <option value="engineer">Engineer</option>
                                <option value="pilot">Pilot</option>
                            </select>

                            <button
                                type="button"
                                onClick={() => handleDeleteRow(index)}
                                className="text-white font-bold px-4 py-2  bg-gradient-to-tr from-red-500 to-orange-400 rounded hover:from-red-600 hover:to-orange-500">
                                X
                            </button>

                        </div>

                        <div className="flex gap-4 text-sm text-red-500">
                            <div className="w-full">
                                {errors[`inputText-${index}`]?.message as string}
                            </div>
                            <div className="w-full">
                                {errors[`userInfo-${index}`]?.message as string}
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex gap-4 items-center">
                    <button
                        type="button"
                        onClick={handleAddRow}
                        className="bg-gradient-to-r from-green-400  to-emerald-600  text-white px-4 py-2 rounded hover:from-green-600 hover:to-emerald-700">
                        + Add Row
                    </button>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white px-4 py-2 rounded hover:from-indigo-600 hover:to-purple-700">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Task6;
