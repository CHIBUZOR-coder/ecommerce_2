import {
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FaCartShopping, FaPerson, FaShop } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

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

  return (
    <div className="bg-white p-4">
      {/*child1 */}
      <div className=" h-28 flex justify-between items-center">
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
          <span>
            <FaCartShopping />
          </span>
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
  );
};

export default Navbar;
