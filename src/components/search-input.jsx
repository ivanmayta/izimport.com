function SeachInput({ inputRef, defaultValue, handleChange }) {
    return (
        <input
            className="bg-background rounded-full  border border-gray-300 text-gray-900 text-sm block w-full ps-10 p-3  dark:bg-background dark:border-gray-400  dark:text-white focus:bg-background "
            placeholder="Ingrese su numero de seguimiento..."
            ref={inputRef}
            onChange={handleChange}
            defaultValue={defaultValue}
            type="text"
        />
    )
}
export default SeachInput
