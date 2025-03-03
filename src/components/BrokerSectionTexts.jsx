/* eslint-disable react/prop-types */

const BrokerSectionTexts = ({ listItems }) => {
  return (
    <section className="mt-16 lg:mt-32 mx-6 lg:mx-[84px] md:mt-20 md:mx-12">
      <div>
        <ul className="list-decimal pl-4">
          {listItems.map((text, index) => (
            <li
              key={index}
              className="text-[12px] leading-[18px] mb-1 text-gray-500"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
      <hr className="mt-8 md:mt-12 border-gray-300" />
    </section>
  );
};

export default BrokerSectionTexts;
