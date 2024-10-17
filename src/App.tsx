import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import RingLoader from "react-spinners/RingLoader";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import ClearLocalStorageOnNavigate from "./components/ClearLocalStorageOnNavigate";
import Overlay from "@components/Overlay";
import { useAppSelector } from "@redux/hooks";
import { selectIsAuthenticated } from "@redux/auth/selectors";

const MainPage = lazy(() => import("@pages/MainPage/MainPage"));
const HealthyPage = lazy(() => import("@pages/HealthyPage/HealthyPage"));
const AromaSchool = lazy(() => import("@pages/SchoolPage/SchoolPage"));
const StorePage = lazy(() => import("@pages/StorePage/StorePage"));
const CertificatesPage = lazy(
  () => import("@pages/CertificatesPage/CertificatesPage")
);
const ProductDetails = lazy(
  () => import("@pages/ProductDetails/ProductDetails")
);
const CartPage = lazy(() => import("@pages/CartPage/CartPage"));
const OrderPage = lazy(() => import("@pages/OrderPage/OrderPage"));
const CreateAdvertPage = lazy(
  () => import("@pages/CreateAdvertPage/CreateAdvertPage")
);
const EditAdvertPage = lazy(
  () => import("@pages/EditAdvertPage/EditAdvertPage")
);
const LoginPage = lazy(() => import("@pages/LoginPage/LoginPage"));
const OrderedPage = lazy(() => import("@pages/OrderedPage/OrderedPage"));
const OrdersPage = lazy(() => import("@pages/OrdersPage/OrdersPage"));
const OrderItemPage = lazy(() => import("@pages/OrderItemPage/OrderItemPage"));

function App() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  return (
    <Suspense
      fallback={
        <Overlay type="loader">
          <RingLoader color="#cabcbc" size={120} />
        </Overlay>
      }
    >
      <ClearLocalStorageOnNavigate />
      <Overlay>
        <RingLoader color="#cabcbc" size={120} />
      </Overlay>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="consultations" element={<HealthyPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="aroma-school" element={<AromaSchool />} />
          <Route path="store" element={<StorePage />} />
          <Route path="store/product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="ordered" element={<OrderedPage />} />
          {isAuthenticated ? (
            <>
              <Route
                path="admin/create-advert"
                element={<CreateAdvertPage />}
              />
              <Route
                path="admin/edit-advert/:productId"
                element={<EditAdvertPage />}
              />
              <Route path="admin/orders" element={<OrdersPage />} />
              <Route path="admin/orders/:id" element={<OrderItemPage />} />
            </>
          ) : (
            <Route
              path="/admin/*"
              element={<Navigate to="/admin/login" replace />}
            />
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/admin/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
