import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FaqSection = ({ faqs = [] }) => {
  // FAQ items data

  // Determine which FAQs to render:
  // - On the demo trading page, render all FAQs.
  // - On other pages, only render FAQ with id 1.
  // const faqsToRender = isDemoTradingAcctsPage
  //   ? Demo_Trading_faqs
  //   : Demo_Trading_faqs.filter((faq) => faq.id === 1);

  // Set default open question to Question 1 (id: 1)
  const [openFaqId, setOpenFaqId] = useState();

  // Toggle the open/close state for an FAQ item
  const toggleFaqHandler = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="my-16 mx-6 md:mx-12 md:my-20 lg:mx-[84px] lg:my-32">
      <div className="md:grid grid-cols-12">
        <div className="leading-[18px] whitespace-pre-line font-medium col-span-4">
          <h2 className="text-3xl md:text-4xl font-semibold md:tracking-wider leading-9 tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="col-span-8">
          <hr className="border-gray-300" />
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              {/* Question Section */}
              <div
                className="py-4 flex items-center justify-between cursor-pointer"
                onClick={() => toggleFaqHandler(faq.id)}
              >
                <p className="text-sm leading-5 tracking-wider">
                  {faq.question}
                </p>
                {openFaqId === faq.id ? (
                  <i className="ri-arrow-up-s-line"></i>
                ) : (
                  <i className="ri-arrow-down-s-line"></i>
                )}
              </div>

              {/* Answer Section */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqId === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm my-2.5">{faq.answer}</p>
                <p className="text-sm my-2.5">{faq.firstanswer}</p>
                <p className="text-sm my-2.5">{faq.secondanswer}</p>
                <p className="text-sm my-2.5">{faq.thirdanswer}</p>
              </div>
              <hr className="border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
