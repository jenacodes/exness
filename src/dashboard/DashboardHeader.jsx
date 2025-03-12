const DashboardHeader = () => {
  return (
    <>
      <header className="sticky top-0 left-0 w-full z-50 bg-white border-b border-b-gray-300">
        <div className="flex items-center justify-between px-2 py-5 lg:hidden lg:px-4 lg:py-2">
          <button className="text-4xl">
            <i className="ri-menu-line"></i>
          </button>
          <a href="/">
            <img
              src="\exness.svg"
              alt="Exness logo"
              className="inline-block h-6"
            />
          </a>
          <button className="text-4xl">
            <i className="ri-notification-4-line"></i>
          </button>
        </div>
        <div className="px-2 py-4 hidden lg:flex items-center justify-between">
          <a href="/">
            <img
              src="\exness.svg"
              alt="Exness logo"
              className="inline-block h-5"
            />
          </a>
          <div>
            <div className="flex items-center h-full">
              <div className="flex gap-1">
                <div className="text-sm leading-5 font-semibold tracking-wider">
                  0.00
                </div>
                <div className="text-sm leading-5 font-semibold tracking-wider">
                  USD
                </div>
              </div>
              <div>
                <button className="inline-flex items-center min-w-10 min-h-10 p-2.5 cursor-pointer justify-center align-middle">
                  <i className="ri-global-line"></i>
                </button>
                <button className="inline-flex items-center min-w-10 min-h-10 p-2 cursor-pointer justify-center align-middle">
                  <i className="ri-question-line"></i>
                </button>
                <button className="inline-flex items-center min-w-10 min-h-10 p-2 cursor-pointer justify-center align-middle">
                  <i className="ri-notification-line"></i>
                </button>
                <button className="inline-flex items-center min-w-10 min-h-10 p-2 cursor-pointer justify-center align-middle">
                  <i className="ri-layout-grid-2-line"></i>
                </button>
                <button className="inline-flex items-center min-w-10 min-h-10 p-2 cursor-pointer justify-center align-middle">
                  <i className="ri-user-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DashboardHeader;
