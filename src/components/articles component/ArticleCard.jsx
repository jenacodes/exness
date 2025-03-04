/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";

const ArticleCard = ({ id, imageSrc, altText, category, title, link }) => {
  const { pathname } = useLocation();
  const isCryptoPage = pathname === "/crypto-cfd";
  return (
    <div
      key={id}
      className="border border-gray-300 rounded-b-xl hover:shadow-lg transition-shadow"
    >
      <a href={link} className="cursor-pointer">
        <figure className="overflow-hidden">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-48 object-cover md:h-56"
          />
        </figure>
        <div className="p-4 flex flex-col gap-4 lg:p-6 lg:gap-6">
          {isCryptoPage ? null : (
            <div>
              <span className="px-2 py-1 text-sm bg-gray-200 rounded-xl md:text-sm inline-block">
                {category}
              </span>
            </div>
          )}
          <h4 className="text-base font-bold text-black md:text-lg">{title}</h4>
        </div>
      </a>
    </div>
  );
};

export default ArticleCard;
