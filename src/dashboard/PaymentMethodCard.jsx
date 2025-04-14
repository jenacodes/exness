/* eslint-disable react/prop-types */

import { CiLock } from "react-icons/ci";

const PaymentMethodCard = ({ imgSrc, title, verification, details, type }) => {
  const textColor = type === "withdrawal" ? "text-black" : "text-gray-500";
  const titleColor = type === "withdrawal" ? "text-black" : "text-gray-500";
  // const verificationColor
  return (
    <div className="flex gap-6 lg:p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
      <div className="w-12 h-12  flex items-center justify-center flex-shrink-0">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="flex flex-col lg:w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center flex-grow gap-2.5">
          <p className={`${titleColor} text-base font-semibold`}>{title}</p>
          <div className="inline-flex items-center gap-2 rounded-lg bg-[#FFFCF2] lg:p-1">
            <CiLock size={15} color="gray" />
            <p className="text-yellow-900 text-xs">{verification}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className={`text-sm ${textColor} leading-5`}>
            <span className="text-gray-500 ">Processing time:</span>{" "}
            {details.processingTime}
          </p>
          <p className={`text-sm ${textColor}`}>
            <span className="text-gray-500">Fee:</span> {details.fee}
          </p>
          <p className={`text-sm ${textColor}`}>
            <span className="text-gray-500">Limits:</span> {details.limits}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
