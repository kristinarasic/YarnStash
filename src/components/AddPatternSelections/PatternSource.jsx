function PatternSource() {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor="craft-select"
                className="text-sm font-medium text-blue-950"
            >
                Pattern source?
            </label>

            <select required  id="craft-select" name="craft" className=" w-full rounded-xl border-2 border-blue-900/30 bg-white/60 px-4 py-3 text-blue-950 shadow-sm outline-none cursor-pointer transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20">
                <option value="">-- Please choose an option --</option>
                <option value="url">URL</option>
                <option value="book">Book</option>
                <option value="magazine">Magazine</option>
                <option value="friend">Friend</option>
                <option value="self-created">Self-created</option>
                <option value="Other">Other</option>
            </select>
            <h1>Enter the source/book, etc...</h1>
            <input required type="text" name="Name" className="border my-2" ></input>
        </div>
    )
}

export default PatternSource;