const Security = () => {
  return (
    <section className="mx-6 my-16 md:mx-[84px] md:my-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="grid gap-12">
          <div>
            <div className="text-left">
              <img
                src="\exness_security_26f7785c26.svg"
                alt=""
                className="w-20 h-20 mb-6"
              />
              <h2 className="text-4xl mb-4">Your Security is our Priority</h2>
            </div>
            <div className="p">
              <p className="">
                From secure payments to negative balance protection, you are
                covered from every angle.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <a
                href=""
                className="text-gray-500 hover:underline hover:text-black "
              >
                Client Protection {">"}
              </a>
            </div>
            <div>
              <a
                href=""
                className="text-gray-500 hover:underline hover:text-black "
              >
                Why Exness {">"}
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="\xl_exness_protection_3_4b0834613f.jpg"
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Security;
