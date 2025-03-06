/* eslint-disable react/prop-types */
// components/ImageTextSection.jsx

const AboutUsImageTextSection = ({
  imageSrc,
  imageAlt,
  title,
  paragraphs,
  reverse = false,
}) => {
  return (
    <section className="mx-6 my-16 lg:mx-[84px] lg:my-32">
      <div
        className={`grid gap-6 grid-cols-1 md:grid-cols-2 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl lg:text-3xl font-bold tracking-wider leading-7 mb-2">
            {title}
          </h2>
          {paragraphs.map((text, index) => (
            <p
              key={index}
              className="text-sm text-gray-700 leading-5 mt-2 first:mt-0"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsImageTextSection;
