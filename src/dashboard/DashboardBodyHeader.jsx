import { PiUserCircleDashed } from "react-icons/pi";
import { DashboardYellowBtn } from "../components";

const DashboardBodyHeader = () => {
  return (
    <div className=" pt-18 lg:pt-14 h-full">
      <div className="lg:pl-16 flex flex-col gap-6 ">
        <div className="py-4 border-b border-b-yellow-color bg-dashboard-header-bg">
          <div className="px-4 w-full max-w-7xl">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center">
              <div className="flex items-center gap-4 flex-[1_1_auto]">
                <PiUserCircleDashed size={50} />
                <span className="text-base leading-6 ">
                  Hello. Fill in your account details to make your first deposit
                </span>
              </div>
              <div className="flex gap-4 mt-6 lg:mt-0">
                <button className="flex-1 lg:flex-none inline-flex items-center justify-center cursor-pointer bg-light-gray px-4 py-2 rounded-md text-black min-w-20 min-h-10">
                  Learn more
                </button>
                <DashboardYellowBtn text="Complete Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBodyHeader;
