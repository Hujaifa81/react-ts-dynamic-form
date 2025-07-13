import { useForm } from "react-hook-form";
import type { IFormValues } from "../interface/formValues";
import Swal from "sweetalert2";

const Task3 = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormValues>();

    const onSubmit = (data: IFormValues) => {
        Swal.fire({
            title: "Data Submitted",
            text: `Text: ${data.inputText}\nInfo: ${data.userInfo}`,
            icon: "success",
        });

    };
    const inputText = watch("inputText");
    const userInfo = watch("userInfo");

    return (
        <div>
            <h1 className="font-bold text-2xl text-center mb-5 bg-gradient-to-r from-indigo-400 to-purple-600  bg-clip-text text-transparent">Task-3</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-10">
                <div className="flex gap-4 items-start">
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Enter text"
                            {...register("inputText", { required: "Text is required" })}
                            className={`border rounded px-4 py-2 w-full ${errors.inputText ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.inputText && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.inputText.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full">
                        <select
                            {...register("userInfo", { required: "Please select a role" })}
                            className={`border rounded px-4 py-2 w-full ${errors.userInfo ? "border-red-500" : "border-gray-300"}`}
                        >
                            <option value="">Select info</option>
                            <option value="doctor">Doctor</option>
                            <option value="engineer">Engineer</option>
                            <option value="pilot">Pilot</option>
                        </select>
                        {errors.userInfo && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.userInfo.message}
                            </p>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white px-4 py-2 rounded hover:from-indigo-600 hover:to-purple-700">
                    Submit
                </button>
            </form>
            <div className="mt-6 space-y-2 px-10">
                <h3 className="text-lg font-semibold">Form State:</h3>
                <h3>Input Text: {inputText ?? "No text entered"}</h3>
                <h3>User Info: {userInfo ?? "Nothing selected"}</h3>
            </div>
        </div>
    );
};

export default Task3;
