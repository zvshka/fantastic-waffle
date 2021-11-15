import Image from "next/image";

const AdvantagesCard = ({image, text}) => {
    return (
        <>
            <div className="bg-primary w-[16rem] flex items-center flex-col p-4 rounded-2xl">
                <Image src={image} width={160} height={160} alt={""}/>
                <p className="text-center text-lg text-white">{text}</p>
            </div>
        </>
    )
}

export default AdvantagesCard