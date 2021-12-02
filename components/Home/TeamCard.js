export const TeamCard = () => {
    return <>
        <div className="bg-primary w-80 h-48 flex">
            <div className="bg-gray-400 w-9/12 h-full"/>
            <div className="p-5 justify-center w-full">
                <p className="text-white text-lg font-medium">Имя Фамилия</p>
                <ul className="text-white">
                    <li>Должность</li>
                    <li>Стаж</li>
                    <li>Языки</li>
                </ul>
            </div>
        </div>
    </>
}