import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterAsStoreOwner from "./pages/RegisterAsStoreOwner";
import FoodItemPage from "./pages/FoodItemPage";
import FoodItemPage2 from "./pages/FoodItemPage2";
import RedirectPageToFoodDelivery from "./pages/RedirectPageToFoodDelivery";
import OwnerDashboard from "./pages/OwnerDashboard";
import OwnerEditProfile from "./pages/OwnerEditProfile";
import OwnerEditMenu from "./pages/OwnerEditMenu";
import IACustomerCheckout from "./pages/IACustomerCheckout";
import RedirectPageToFoodDelivery2 from "./pages/RedirectPageToFoodDelivery2";
import OwnerEditMenuItem from "./pages/OwnerEditMenuItem";
import OwnerAddToMenu from "./pages/OwnerAddToMenu";
import OwnerOrders from "./pages/OwnerOrders";
import CustomerCart from "./pages/CustomerCart";
import ViewAllDeals from "./pages/ViewAllDeals";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/register-as-store-owner":
        title = "";
        metaDescription = "";
        break;
      case "/redirect-page-to-food-delivery-app":
        title = "";
        metaDescription = "";
        break;
      case "view-all-deals":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/register-as-store-owner"
        element={<RegisterAsStoreOwner />}
      />
      <Route path="/food-item-page" element={<FoodItemPage />} />
      <Route path="/food-item-page2" element={<FoodItemPage2 />} />
      <Route path="/owner-dashboard" element={<OwnerDashboard />} />
      <Route path="/owner-edit-profile" element={<OwnerEditProfile />} />
      <Route path="/owner-edit-menu" element={<OwnerEditMenu />} />
      <Route path="/in-app-checkout" element={<IACustomerCheckout />} />
      <Route
        path="/redirect-page-to-food-delivery-app"
        element={<RedirectPageToFoodDelivery />}
      />
      <Route
        path="/redirect-page-to-food-delivery-app2"
        element={<RedirectPageToFoodDelivery2 />}
      />
      <Route path="/owner-edit-item" element={<OwnerEditMenuItem />} />
      <Route path="/owner-add-to-menu" element={<OwnerAddToMenu />} />
      <Route path="/owner-orders" element={<OwnerOrders />} />
      <Route path="/cart" element={<CustomerCart />} />
      <Route path="/view-all-deals" element={<ViewAllDeals />} />
    </Routes>
  );
}
export default App;
