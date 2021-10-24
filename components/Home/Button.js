const Button = ({children, onClick, className}) => {
    return <button className={`px-8 py-2 bg-secondary text-white rounded-2xl font-bold text-md ${className}`} onClick={onClick}>
        {children}
    </button>
}
export default Button