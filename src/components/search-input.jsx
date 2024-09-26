function SeachInput({ inputRef, defaultValue, handleChange }) {
    return (
        <input
            className="bg-background rounded-full  text-black text-sm block w-full ps-10 p-3  dark:bg-transparent dark:border-gray-400  dark:text-white focus:bg-background appearance-none border-2 border-gray-900   leading-tight focus:outline-none focus:bg-white focus:border-black "
            placeholder="Ingrese su numero de seguimiento..."
            ref={inputRef}
            onChange={handleChange}
            defaultValue={defaultValue}
            type="search"
        />
    )
}
export default SeachInput
