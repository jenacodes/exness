// eslint-disable-next-line react/prop-types
const DashboardYellowBtn = ({ text }) => {
  return (
    <button className="flex-1 inline-flex items-center justify-center cursor-pointer bg-primary px-4 py-2 rounded-md text-black">
      {text}
    </button>
  );
};

export default DashboardYellowBtn;
