import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../buttons/Button"; // Adjust the path as necessary
import SignInButton from "../buttons/SignInButton"; // Adjust the path as necessary
const HeaderBtnCont = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";
  return (
    <>
      {!isLoginPage ? (
        <>
          <div className="flex items-center gap-6 mt-0 max-md:mt-4 max-md:hidden md:hidden lg:flex z-50">
            <Button text={"Register"} />

            <Link to={"/login"}>
              <SignInButton text={"Sign in"} />
            </Link>
            <a href="" className="font-light text-lg hidden md:block">
              <i className="ri-global-line"></i> En
            </a>
          </div>
        </>
      ) : (
        <a href="" className="font-light text-lg hidden md:block">
          <i className="ri-global-line"></i> En
        </a>
      )}
    </>
  );
};

export default HeaderBtnCont;
