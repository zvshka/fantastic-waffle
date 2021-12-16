const Button = ({children, onClick, className}) => {
    return <button className={
        `px-6 py-2 bg-secondary text-white rounded-xl font-bold text-md ${className}
        hover:bg-blue-700 transition-all ease-in
        `} onClick={onClick}>
        {children}
    </button>
}
export default Button