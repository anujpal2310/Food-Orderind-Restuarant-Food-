import Heading from "./src/components/Header";
import Footer from "./src/components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { userContext } from "./src/utils/Context";
import { Provider } from "react-redux";
import store from "./src/utils/store";
/*
Heading
  Logo (left-side)
  Nav Itens (right-side)
  Cart
Body
  SearchBar
  RestaurantList
    RestaurantCard
      Image
      Name
      Rating
      Cusines (comma seperated)

Footer
  links
  copyrights
*/

const AppLayout = () => {
  // const { user } = useContext(userContext);
  const [user, setUser] = useState({
    name: "rahul",
    email: "rahul@gmail.com",
    phone: "+91943520000",
  });

  return (
    <Provider store={store}>
      <userContext.Provider value={{ user, setUser }}>
        <>
          <Heading />
          <Outlet />
          <Footer />
        </>
      </userContext.Provider>
    </Provider>
  );
};
export default AppLayout;
