import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("testing logo loding", () => {
  //load heading in virtual dom i-e jsdom
  //check if logo is loaded
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />{" "}
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId("test-logo");
  console.log(logo);

  expect(logo.src).toBe(
    "http://localhost/dummyLogoImage"
    // "https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg"
  );
});
