const Task1 = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl text-center mb-5 bg-gradient-to-r from-indigo-400 to-purple-600  bg-clip-text text-transparent">Task-1</h1>
            <form className="space-y-4 px-10">
                <div className="flex gap-4 items-center">
                    <input placeholder="Enter text" className="border border-gray-300 rounded px-4 py-2 w-full"/>
                    <select
                        className="border border-gray-300 rounded px-4 py-2 w-full">
                        <option value="">Select info</option>
                        <option value="doctor">Doctor</option>
                        <option value="engineer">Engineer</option>
                        <option value="pilot">Pilot</option>
                    </select>
                </div>
            </form>
        </div>

    );
};

export default Task1;
