/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import GoToTop from "@components/GoToTop/GoToTop";

const SharedLayout = () => {
  return (
    <>
      <ToastContainer autoClose={1500} position="top-center" theme="dark" />

      <Header />
      <main>
        <GoToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
