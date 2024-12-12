import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "./assets/apis/api";
import LayoutOne from "./layouts/LayoutOne";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AboutPage from "./pages/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import ShippingPage from "./pages/ShippingPage";
import TrackingResult from "./pages/TrackingResult";
import TrackingPage from "./pages/TrackingPage";
import Invoice from "./pages/Invoice";
import AdminPage from "./pages/AdminPage";
import { addUser, removeUser } from "./features/user/userSlice";
import PackagePage from "./pages/PackagePage";
import UpdatePassword from "./pages/UpdatePassword";
import TestPage from "./pages/TestPage";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = !!localStorage.getItem("access_token");
  const auth = useSelector((state) => state.user.auth);

  const fetchUser = async () => {
    try {
      const response = await api.post("/me");
      dispatch(addUser(response.data));
    } catch (error) {
      dispatch(removeUser());
      localStorage.removeItem("access_token");
      navigate("/");
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    }
    // eslint-disable-next-line
  }, [token]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutOne>
            <Home />
          </LayoutOne>
        }
      />
      <Route
        path="/create-an-account-for-user"
        element={
          <LayoutOne>
            <SignupPage />
          </LayoutOne>
        }
      />
      <Route
        path="/login"
        element={
          <LayoutOne>
            <LoginPage />
          </LayoutOne>
        }
      />
      <Route
        path="/about-us"
        element={
          <LayoutOne>
            <AboutPage />
          </LayoutOne>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <LayoutOne>
            <PrivacyPolicyPage />
          </LayoutOne>
        }
      />
      <Route
        path="/terms-and-condition"
        element={
          <LayoutOne>
            <TermsPage />
          </LayoutOne>
        }
      />
      <Route
        path="/create-shipping"
        element={
          <LayoutOne>
            <ShippingPage />
          </LayoutOne>
        }
      />
      <Route
        path="/track-package"
        element={
          <LayoutOne>
            <TrackingPage />
          </LayoutOne>
        }
      />
      <Route
        path="/tracking-results"
        element={
          <LayoutOne>
            <TrackingResult />
          </LayoutOne>
        }
      />
      <Route
        path="/generate-invoice"
        element={
          <LayoutOne>
            <Invoice />
          </LayoutOne>
        }
      />
      <Route path="/payment" element={
        <TestPage/>
       } />
      {/* Admin pages */}
      {auth && (
        <>
          <Route
            path="/dashboard"
            element={
              <LayoutOne>
                <AdminPage />
              </LayoutOne>
            }
          />
          <Route
            path="/package-details/:tracking_id"
            element={
              <LayoutOne>
                <PackagePage />
              </LayoutOne>
            }
          />
          <Route
            path="/update-password"
            element={
              <LayoutOne>
                <UpdatePassword />
              </LayoutOne>
            }
          />
        </>
      )}
    </Routes>
  );
};

export default App;
