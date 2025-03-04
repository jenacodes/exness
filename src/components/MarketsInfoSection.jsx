/* eslint-disable react/prop-types */

const InfoSection = ({ header, description, subsections = [] }) => {
  return (
    <section className="mx-6 my-16 md:mx-12 lg:mx-[84px]">
      <div className="xl:max-w-[1280px]">
        <div className="grid lg:grid-cols-6 lg:gap-12">
          {/* Left Column: Header */}
          <div className="md:col-span-2">
            <h2 className="text-4xl leading-12 font-semibold tracking-wider mb-2">
              {header}
            </h2>
          </div>
          {/* Right Column: Content */}
          <div className="md:col-span-4">
            <div className="flex flex-col">
              <div>
                <p className="text-lg leading-6 text-gray-500">{description}</p>
              </div>
              <div className="my-6 py-6 md:mt-8 md:mb-0 border-t border-t-gray-300 lg:mt-12">
                {subsections.map((subsection, index) => (
                  <div key={index}>
                    <div className="grid gap-2">
                      {subsection.title && (
                        <h4 className="text-base md:text-2xl leading-6 font-semibold tracking-wider">
                          {subsection.title}
                        </h4>
                      )}
                      <>
                        {subsection.paragraph && (
                          <p className="text-sm md:text-lg leading-5 mb-3">
                            {subsection.paragraph}
                          </p>
                        )}
                      </>

                      <>
                        {subsection.list && (
                          <ul className="my-4 pl-10">
                            {subsection.list.map((item, idx) => (
                              <li key={idx} className="list-disc">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {subsection.secondParagraph && (
                          <p className="text-sm md:text-lg leading-5 mb-3">
                            {subsection.secondParagraph}
                          </p>
                        )}
                      </>
                      {subsection.link && (
                        <p className="text-base md:text-lg leading-5 md:mt-6 mt-4">
                          {subsection.link.preText}{" "}
                          <a
                            href={subsection.link.href}
                            className="text-blue-500 hover:underline"
                          >
                            {subsection.link.text}
                          </a>
                        </p>
                      )}
                    </div>
                    {/* Add a horizontal rule except after the last subsection */}
                    {index !== subsections.length - 1 && (
                      <hr className="border border-gray-100 my-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
