import Header from "../components/header/Header";
import Login from "../pages/loginPage/Login";
import Main from '../pages/mainPage/Main';
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import SignUp from "../pages/signupPage/SignUp";
import store from "../store/store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import ResetPassword from "../pages/resetPassword/ResetPassword";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Main />} />
              <Route path="login" element={<Login />} />
              <Route path="sign_up" element={<SignUp />} />
              <Route path="forgot_password" element={<ForgotPassword />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
