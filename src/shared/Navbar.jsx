import { useContext, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import {
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FaCartShopping, FaPerson, FaShop } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../Context/ProductProvider";

const Navbar = () => {
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Children",
      path: "/children",
    },
    {
      title: "Women",
      path: "/women",
    },
    {
      title: "Men",
      path: "/men",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const { cartCount } = useContext(ProductContext);

  return (
    <div className="bg-white sticky top-0 z-40">
      {/*Large Screen */}
      <div className="hidden lg:block  py-2 px-5">
        <div className=" py-3 flex justify-between items-center">
          {/* left */}
          <div className="  flex justify-between items-center gap-3">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>

          {/* Middle */}
          <div className=" flex items-center gap-2  ">
            <Link
              to={"/"}
              className="text-white bg-black h-[36px] w-[36px] rounded-full font-semibold flex justify-center items-center"
            >
              M
            </Link>

            <p className="font-[700] text-black">Modern Shop</p>
          </div>

          {/* Right*/}
          <div className="flex justify-between items-center gap-3">
            <span>
              <FaSearch />
            </span>
            <span>
              <FaUser />
            </span>
            <Link to={"/cart"} className="cursor-pointer relative">
              <FaCartShopping />

              <p className="absolute -right-[12px] -top-3 font-semibold">{cartCount && cartCount}</p>
            </Link>
          </div>
        </div>

        {/* child2 */}
        <div className="flex justify-center items-center gap-6">
          {links.map((item, i) => (
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : ""}      font-semibold`
              }
              to={item.path}
              key={i}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Small Screen */}
      <div className="relative block lg:hidden ">
        <div className="flex justify-between bg-white p-4">
          <Link
            to={"/"}
            className="text-white bg-black h-[36px] w-[36px] rounded-full font-semibold flex justify-center items-center"
          >
            M
          </Link>

          <span onClick={() => setShowMenu((prv) => !prv)}>
            <CgMenuGridR className="h-10 w-10 cursor-pointer" />
          </span>
        </div>

        <div
          className={`absolute top-[100%] bg-red-600 min-h-[300px] w-full z-20 ${showMenu ? "" : "hidden"}`}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
