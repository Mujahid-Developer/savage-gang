import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import RightSVG from "../assets/right-circle.svg";

const Navbar = () => {
  const navigation = [{ name: "About", href: "/about", current: false }];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <img
        className=" md:w-80 w-56 absolute -z-10 top-0 right-0"
        src={RightSVG}
        alt=""
        srcset=""
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-900/20 via-violet-900/30 to-violet-900/10 backdrop-blur-md  rounded-b-lg">
        <div className="flex items-center justify-between h-16 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={Logo} alt="Workflow" />
              </Link>
            </div>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <div className="flex gap-2 items-center">
                    <FaQuestionCircle />
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
