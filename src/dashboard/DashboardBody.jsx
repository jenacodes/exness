import { PiUserCircleDashed } from "react-icons/pi";
import { Slider } from "../components";

const DashboardBody = () => {
  return (
    <div className=" pt-18 h-full">
      <div className="lg:pl-16 flex flex-col gap-6 ">
        <div className="py-4 border-b border-b-yellow-color bg-dashboard-header-bg">
          <div className="px-4 w-full max-w-7xl">
            <div className="flex flex-col items-stretch">
              <div className="flex items-center gap-4 flex-[1_1_auto]">
                <PiUserCircleDashed size={50} />
                <span className="text-base leading-6 ">
                  Hello. Fill in your account details to make your first deposit
                </span>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="flex-1 inline-flex items-center justify-center cursor-pointer bg-light-gray px-4 py-2 rounded-md text-black min-w-20 min-h-10">
                  Learn more
                </button>

                <button className="flex-1 inline-flex items-center justify-center cursor-pointer bg-primary px-4 py-2 rounded-md text-black">
                  Complete Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default DashboardBody;
