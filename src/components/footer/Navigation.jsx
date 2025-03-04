import { useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";
  return (
    <>
      {/* Navigation */}
      {!isLoginPage && (
        <nav className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="break-inside-avoid">
              <ul className="space-y-3">
                <li className="text-sm font-medium text-black md:text-base">
                  Accounts
                </li>
                {[
                  "Standard accounts",
                  "Professional Accounts",
                  "Demo trading accounts",
                  "Social Trading accounts",
                ].map((item) => (
                  <li key={item} className="mt-2">
                    <a
                      href="#"
                      className="text-xs text-gray-500 transition-colors hover:text-gray-400 md:text-sm hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navigation;
