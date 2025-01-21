import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

function Navbar() {
  const favorite = useSelector((state) => state.favorite.favorite);
  return (
    <nav className="fixed w-full bg-white px-16 py-4 flex flex-col sm:flex-row gap-y-5 items-center justify-between shadow-sm z-50">
      <div className="logo">
        <Link to="">
          <p className="text-4xl font-bold ">
            Banker <span className="text-orange-600">.</span>
          </p>
        </Link>
      </div>
      <ul className="navList flex gap-5 text-lg">
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="add">Add Product</NavLink>
        </li>
        <li>
          <NavLink to="favorites">Favorites({favorite.length})</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
