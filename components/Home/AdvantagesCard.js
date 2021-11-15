import Image from "next/image";

const AdvantagesCard = ({image, text}) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="bg-primary flex p-8 rounded-2xl">
                    <Image src={image} width={200} height={200} alt={""}/>
                </div>
                <p className="text-center text-lg">{text}</p>
            </div>
        </>
    )
}

export default AdvantagesCard