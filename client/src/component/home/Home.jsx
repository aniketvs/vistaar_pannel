import React from "react";
import './Home.css'
import { useAuth0 } from "@auth0/auth0-react";
import UserDataTable from "../table/UserDataTable";
const Home=()=>{
    const {user}=useAuth0();
    
    return(
        <>
          <div>
            <p className="w-text m-4">Welcome {user.name} !</p>
          
          </div>
          <UserDataTable/>
        </>
    );
}
export default Home;