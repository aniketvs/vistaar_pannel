import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/image/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
//import { MdLogout } from "react-icons/md";
const Header = () => {
  const { isAuthenticated, logout } = useAuth0();
  const [index,setIndex]=useState(0);
  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      await logout({ returnTo: window.location.origin });
      toast.success("you logout successful!");
    } catch {
      toast.error("Something went wrong");
    }
  };
  const arr = [
    { name: "Home", path: "/" },
    { name: "Account", path: "/accounts" },
    { name: "Product", path: "/products" },
  ];

  return (
    <>
      <nav className="navbar bg-body-tertiary nav-container">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div className="logo-wrapper">
              <img src={logo} alt={logo} height="100%" width="100%" />
            </div>
          </Link>
         
          {isAuthenticated ? (
            <>
             <ul className="ul">
            {arr.map((item,ind) => (
              <li>
                <Link onClick={()=>{setIndex(ind)}}
                  className={
                   index === ind ? "active" : "link"
                  }
                  to={item.path}
                >
                 {item.name}
                </Link>
              </li>
            ))}
           
          </ul>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
            </>
          
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};
export default Header;
