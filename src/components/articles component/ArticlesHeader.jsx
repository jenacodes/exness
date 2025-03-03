/* eslint-disable react/prop-types */

const ArticlesHeader = ({ title, subtitle, linkText, linkHref }) => (
  <div className="mx-auto mb-12 max-w-[656px]">
    <div className="text-center whitespace-pre-line">
      <h2 className="text-2xl mb-4 md:text-3xl lg:text-4xl font-semibold tracking-wider">
        {title}
      </h2>
    </div>
    <p className="text-center text-gray-500 text-base leading-6 md:text-[18px] inline">
      {subtitle}
    </p>
    <div className="mt-5 text-center">
      <a
        href={linkHref}
        className="text-gray-500 text-base hover:text-black hover:underline transition-colors md:text-[18px]"
      >
        {linkText}
      </a>
    </div>
  </div>
);

export default ArticlesHeader;
