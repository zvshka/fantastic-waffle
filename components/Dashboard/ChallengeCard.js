import {Badge} from "./Badge";

export const ChallengeCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-6 py-4">
            <div className="grid grid-cols-12 gap-3">
                {/*<div className="col-span-0 sm:col-span-2 text-center hidden sm:block">*/}
                {/*    <div className="grid grid-rows-2">*/}
                {/*        <div className="inline-block font-medium text-xl">*/}
                {/*            21*/}
                {/*        </div>*/}

                {/*        <div className="inline-block font-medium text-sm">*/}
                {/*            Votes*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <a href="#" className="grid grid-rows-2 mx-auto mb-3 py-1 w-4/5 2lg:w-3/5 rounded-md bg-green-400">*/}
                {/*        <div className="inline-block font-medium text-2xl text-white">*/}
                {/*            12*/}
                {/*        </div>*/}

                {/*        <div className="inline-block font-medium text-white mx-1 text-sm lg:text-md">*/}
                {/*            Answers*/}
                {/*        </div>*/}
                {/*    </a>*/}

                {/*    <div className="grid my-3">*/}
                {/*    <span className="inline-block font-bold text-xs">*/}
                {/*        1213 Views*/}
                {/*    </span>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="col-span-12 sm:col-end-13 sm:px-0">
                    <div className="grid block sm:hidden">
                        <div className="flex flex-wrap">
                            {/*<div className="mr-2">*/}
                            {/*    <div className="inline-block font-light capitalize">*/}
                            {/*        <span className="text-sm">*/}
                            {/*        21 Votes*/}
                            {/*    </span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="mr-2">*/}
                            {/*    <div className="inline-block font-light capitalize">*/}
                            {/*        <span className="text-sm">*/}
                            {/*        21 Answers*/}
                            {/*    </span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="mr-2">*/}
                            {/*    <div className="inline-block">*/}
                            {/*        <span className="text-sm capitalize font-light">*/}
                            {/*        21 Views*/}
                            {/*    </span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="mr-2">
                                <div className="inline-block">
                                    <span className="text-sm font-light">
                                    a few mins ago ago
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center hidden sm:block">
                    <span className="font-light text-gray-600">
                        a few min ago
                    </span>
                    </div>

                    <div className="mt-2">
                        <a href="#"
                           className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold">
                            Praesent at arcu augue. Etiam lectus massa, consequat
                        </a>

                        <p className="mt-2 text-gray-600 text-sm md:text-md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Tempora expedita dicta totam totam gul koparam doloremque. Excepturi iste iusto eos enim
                            reprehenderit nisi, accusamus...
                        </p>
                    </div>

                    <div className="grid grid-cols-2 mt-4 my-auto">
                        <div className="flex flex-wrap justify-starts
                             items-center py-3 text-xs text-white font-medium">
                            <Badge text={"JS"}/>
                            <Badge text={"WEB"}/>
                            <Badge text={"NODE.JS"}/>
                        </div>

                        <div className="col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12">
                            <a href="#" className="flex items-center">
                                <img src="https://cdn.discordapp.com/avatars/263349725099458566/b5b18f501c40f7ba6c8bc5f4085ab221.png?size=128" alt="avatar"
                                     className="mr-2 w-8 h-8 rounded-full"/>

                                <div className="text-gray-600 font-bold text-sm">
                                    Andrey Pushpurs
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}