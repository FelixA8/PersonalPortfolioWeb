import Meteors from "../particles/component-meteor";
import BgText from "../text/BgText";

const MeteorCard = () => {
    return <div className="w-full mt-10 lg:w-1/2 relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-black border border-gray-800  p-3 lg:p-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="flex flex-row justify-between w-full">
                <h2 className="text-xl text-gray-300 lg:text-[2rem] mb-5">
                    2022 - 2026
                </h2>
                <BgText
                    bgColor="bg-green-700"
                    bgTitle="Bachelor Degree"
                    bgText=""
                    showText={false}
                />
            </div>
            <BgText
                bgColor="bg-yellow-600"
                bgTitle="Major"
                bgText="Mobile Application and Technology, School of Computer Science"
                showText={true}
            />
            <div className="flex flex-wrap gap-4">
                <div className="flex flex-col">
                    <BgText
                        bgColor="bg-blue-600"
                        bgTitle="Current GPA"
                        bgText="3.86"
                        showText={true}
                    />
                </div>
                <div className="flex flex-col">
                    <div className="inline-block">
                        <BgText
                            bgColor="bg-purple-700"
                            bgTitle="Current Semester"
                            bgText="6th Semester"
                            showText={true}
                        />
                    </div>
                </div>
            </div>
            <Meteors number={20} />
        </div>
    </div>
}

export default MeteorCard