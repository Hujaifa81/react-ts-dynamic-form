import { useForm } from "react-hook-form";
import { useState } from "react";
import type { IFormValues } from "../interface/formValues";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const Task4 = () => {
    const [userEntry, setUserEntries] = useState<IFormValues[]>([
        { inputText: "", userInfo: "" },
    ]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const handleAddRow = () => {
        setUserEntries([...userEntry, { inputText: "", userInfo: "" }]);
        toast.success("Row is added")
    };

    const onSubmit = () => {
        Swal.fire({
            title: "Data Submitted",
            icon: "success",
        });
        reset()
        setUserEntries([{ inputText: "", userInfo: "" }]);
    };

    return (
        <div>
            <h1 className="font-bold text-2xl text-center mb-5 bg-gradient-to-r from-indigo-400 to-purple-600  bg-clip-text text-transparent">Task-4</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-10">
                {userEntry.map((personInfo, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <div className="flex gap-4 items-center">

                            <input
                                placeholder="Enter text"
                                {...register(`inputText-${index}`, {
                                    required: "Text is required",
                                })}
                                type="text"
                                defaultValue={personInfo.inputText}
                                className={`border rounded px-4 py-2 w-full ${errors[`inputText-${index}`] ? "border-red-500" : "border-gray-300"}`}
                            />
                            <select
                                {...register(`userInfo-${index}`, {
                                    required: "Please select a role",
                                })}
                                defaultValue={personInfo.userInfo}
                                className={`border rounded px-4 py-2 w-full ${errors[`userInfo-${index}`] ? "border-red-500" : "border-gray-300"
                                    }`}
                            >
                                <option value="">Select info</option>
                                <option value="doctor">Doctor</option>
                                <option value="engineer">Engineer</option>
                                <option value="pilot">Pilot</option>
                            </select>
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

export default Task4;
