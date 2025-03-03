import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MobileMenuHeader = ({ toggleMenu }) => {
  return (
    <div className="flex items-center justify-between px-7 bg-white h-16">
      <Link to="/" className="shrink-0 flex items-center">
        <img
          src="https://d33vw3iu5hs0zi.cloudfront.net/media/logo_small_new_67037e8ecb.svg"
          alt="exness logo"
        />
      </Link>
      <div className="flex items-center gap-4">
        <a href="/login" className="text-sm text-gray-600">
          Sign in
        </a>
        <button onClick={toggleMenu}>
          <i className="ri-close-line text-2xl"></i>
        </button>
      </div>
    </div>
  );
};
MobileMenuHeader.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenuHeader;
