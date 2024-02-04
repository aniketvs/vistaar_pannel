import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./common/Header/Header";
import Login from "./component/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./component/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./component/listing/List";
import { getAccountUrl,getProductUrl } from "./endpoints";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
    
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
          <Route path="/accounts" element={<List url={getAccountUrl} title={"Listing of accountId"} com={"accounts"}/>}/>
          <Route path="/products" element={<List url={getProductUrl} title={"Listing of distinct product"} com={"products"}/>}/>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
      {/* <ul>
        <li onClick={loginWithPopup}>Login with popup</li>
        <li onClick={loginWithRedirect}>Login with redirect</li>
        <li onClick={logout}>logout</li>
      </ul>
      <h1> {isAuthenticated ? "logged in " : "not logged in"}</h1>
      {isAuthenticated ? <pre>{JSON.stringify(user, null, 2)}</pre> : ""} */}
    </>
  );
}

export default App;
