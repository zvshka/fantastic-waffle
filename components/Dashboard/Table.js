import Link from "next/link";

const BaseTh = ({text}) => {
    return <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
        <div className="flex items-center justify-center">
            {text}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"/>
            </svg>
        </div>
    </th>
}

const ItemRow = ({item, baseEditUrl}) => {
    const editUrl = baseEditUrl + "/" + item.id + "/edit"
    return <tr className="bg-white text-center border-b text-sm text-gray-600">
        <td className="p-2 border-r">
            <input type="checkbox"/>
        </td>
        {
            Object.entries(item).map(([key, value], index) => <td className="p-2 border-r" key={index}>{value}</td>)
        }
        <td>
            <div className="flex flex-col">
                <Link href={editUrl}>
                    <a href={editUrl} className="bg-secondary p-2 text-white hover:shadow-lg text-xs font-thin">Изменить</a>
                </Link>
                <a href="#" className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Удалить</a>
            </div>
        </td>
    </tr>
}

export const Table = ({titles, items, baseEditUrl}) => {
    return (
        <div className="overflow-x-auto">
            <table className="border-separate">
                <thead>
                <tr className="bg-gray-50 border-b">
                    <th className="border-r p-2">
                        <input type="checkbox"/>
                    </th>
                    {titles.map((t, i) => <BaseTh text={t} key={i}/>)}
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Действия
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"/>
                            </svg>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white text-center">
                    <td className="p-2 border-r border-b">

                    </td>
                    <td className="p-2 border-r border-b">
                        <input type="text" className="border p-1"/>
                    </td>
                    <td className="p-2 border-r border-b">
                        <input type="text" className="border p-1"/>
                    </td>
                    <td className="p-2 border-r border-b">
                        <input type="text" className="border p-1"/>
                    </td>
                    <td className="p-2 border-r border-b">
                        <input type="text" className="border p-1"/>
                    </td>
                    <td className="p-2 border-r border-b">
                        <input type="text" className="border p-1"/>
                    </td>
                    <td className="p-2 border-r border-b">

                    </td>
                </tr>
                {items.map((item, key) => <ItemRow baseEditUrl={baseEditUrl} item={item} key={key}/>)}
                </tbody>
            </table>
        </div>
    )
}