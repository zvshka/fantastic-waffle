import Image from "next/image";

const AdvantagesCard = ({image, text}) => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="bg-primary text-white p-8 rounded-lg md:w-full mb-4">
                    <div className="flex items-center justify-center">
                        <Image src={image} width={160} height={160} alt={""}/>
                    </div>
                </div>
                <p className="text-center text-lg">{text}</p>
            </div>
        </>
    )
}

export default AdvantagesCard