import Image from "next/image";

export const LanguageCard = ({image, text}) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="bg-primary flex p-8 rounded-2xl">
                    <Image src={image} width={160} height={160} alt={""}/>
                </div>
                <p className="text-center text-lg">{text}</p>
            </div>
        </>
    )
}