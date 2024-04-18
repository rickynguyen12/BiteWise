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
import OwnerDashboard from "./pages/OwnerDashboard";
import OwnerEditProfile from "./pages/OwnerEditProfile";
import OwnerEditMenu from "./pages/OwnerEditMenu";
import RedirectPageToFoodDelivery from "./pages/RedirectPageToFoodDelivery";

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
      <Route path="/compare-prices" element={<RedirectPageToFoodDelivery />} />
    </Routes>
  );
}
export default App;
