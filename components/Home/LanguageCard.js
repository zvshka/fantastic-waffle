import Image from "next/image";

export const LanguageCard = ({image, text}) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="bg-primary flex p-10 rounded-2xl">
                    <Image src={image} width={150} height={150} alt={""}/>
                </div>
                <p className="text-center text-lg">{text}</p>
            </div>
        </>
    )
}