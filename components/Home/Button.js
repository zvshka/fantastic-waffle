const Button = ({children, onClick, className}) => {
    return <button className={
        `
        px-8 py-2 bg-secondary text-white rounded-2xl font-bold text-md ${className}
        hover:bg-blue-700 transition-all ease-in
        `} onClick={onClick}>
        {children}
    </button>
}
export default Button