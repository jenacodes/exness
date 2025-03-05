/* eslint-disable react/prop-types */
const InfoCardsSection = ({ title, description, cards }) => {
  return (
    <section className="mx-6 my-16 md:mx-12 md:mb-20 md:mt-0 lg:mx-[84px]">
      <div>
        {/* Section Header */}
        <div className="text-center mb-6 max-w-[312px] md:max-w-[640px] lg:max-w-[656px] mx-auto">
          <h2 className="text-3xl md:text-4xl leading-9 font-semibold tracking-wider lg:mb-4">
            {title}
          </h2>
          <p className="text-sm lg:text-lg lg:leading-6 leading-5 whitespace-pre-line text-center text-gray-500">
            {description}
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg p-6 bg-white border border-gray-300"
            >
              <div className="flex justify-end pb-6">
                <div>
                  <img src={card.imgSrc} alt={card.imgAlt} />
                </div>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-semibold whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
