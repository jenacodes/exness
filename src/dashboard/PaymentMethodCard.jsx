import { CiLock } from "react-icons/ci";
import PropTypes from "prop-types";

const PaymentMethodCard = ({ icon, title, verification, details }) => {
  return (
    <div className="flex gap-6 lg:p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
      <div className="w-12 h-12 bg-[#b9b9b9] rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col lg:w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center flex-grow gap-2.5">
          <p className="text-gray-500 text-base font-semibold">{title}</p>
          <div className="inline-flex items-center gap-2 rounded-lg bg-[#FFFCF2] lg:p-1">
            <CiLock size={15} color="gray" />
            <p className="text-gray-400 text-sm">{verification}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {details.map((line, index) => (
            <p key={index} className="text-sm text-gray-500">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
PaymentMethodCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  verification: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PaymentMethodCard;
