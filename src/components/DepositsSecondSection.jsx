/* eslint-disable react/prop-types */
import React from "react";
import { frictionlessExperienceDetails } from "../utils/constants";

const DepositsSecondSection = ({
  mainHeading = "Frictionless experience from the start to finish",

  mainParagraph = "Benefit from our unrivaled payments ecosystem: seamless deposits via global and local payment systems, 24/7 access and hassle-free release of funds.",
  imageSrc = "src/assets/deposits-imgs/md_exness_deposits_4516a9f627.jpg",
  details = frictionlessExperienceDetails,
}) => {
  return (
    <section className="my-16 mx-6 md:mx-12 md:my-20 lg:mx-[84px] lg:my-32">
      {/* Main Heading & Description */}
      <div className="text-center mb-6 md:mb-12">
        <div className="max-w-[312px] md:max-w-[640px] lg:max-w-[656px] ml-auto mr-auto">
          <h2 className="text-3xl leading-9 font-semibold tracking-wider md:tracking-widest md:font-semibold font-poppins mb-2">
            {mainHeading}
          </h2>
          <p className="text-lg leading-5 text-gray-500">{mainParagraph}</p>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid gap-6 md:gap-12 md:grid-cols-2">
        {/* Left Column: Image */}
        <div className="rounded-lg md:order-1">
          <img src={imageSrc} alt="" className="w-full h-auto" />
        </div>

        {/* Right Column: Detail Blocks */}
        <div>
          <div className="flex flex-col">
            {details.map((detail, index) => {
              const headingClass =
                "text-[20px] md:text-2xl font-semibold tracking-wider md:tracking-widest mb-2 leading-7 md:mt-12";

              return (
                <React.Fragment key={index}>
                  <div>
                    <h4 className={headingClass}>{detail.heading}</h4>
                    <p className="text-sm md:text-[16px] leading-5">
                      {detail.paragraph}
                    </p>
                  </div>
                  <hr className="border border-gray-100 my-6 md:hidden" />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositsSecondSection;
