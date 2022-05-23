import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
import Login from "./components/Login/Login";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/BlogSingle";
import AboutMe from "./components/AboutMe/AboutMe";
import CompleteCheckout from "./components/CompleteCheckout/CompleteCheckout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route
          path="/completecchekout"
          element={
            <RequireAuth>
              <CompleteCheckout />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/posts/:id" element={<BlogSingle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
