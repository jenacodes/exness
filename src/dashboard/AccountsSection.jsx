import { FaInbox } from "react-icons/fa";
const AccountsSection = () => {
  return (
    <div className="py-[100px] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <FaInbox size={30} />
        <h3 className="text-black text-xl font-bold mt-4">
          You dont have any real accounts
        </h3>
      </div>
    </div>
  );
};

export default AccountsSection;
