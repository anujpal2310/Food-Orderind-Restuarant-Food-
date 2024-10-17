import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.jpg"
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItem = useSelector((store) => store.cart);
  // console.log(cartItem);

  return (
    <div className="flex justify-between p-5 border border-black bg-orange-100 items-center">
      <Link to="/">
        <div className="w-24">
          <img
            data-testid="test-logo"
            className="w-full"
            src={logo}
            // src="https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg"
          />
        </div>
      </Link>

      <h2 className="text-red-600 text-2xl italic">Restaurent Food</h2>
      <div className="">
        <ul className="flex">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">Cart - {cartItem.items.length + " items"}</li>
          </Link>
          <div
            className="cursor-pointer"
            onClick={() =>
              isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
            }
          >
            {!isLoggedIn ? <li>Login</li> : <li>Logout</li>}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
