import React, { useEffect, useState } from "react";
import { getListing } from "../../api/apiCalls";
import "../home/Home.css";
import Spinner from "../../common/Header/Spinner";
const List = ({ url, title ,com}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getListing(setData, setLoading, url);
  }, [url]);
  return (
    <>
      <div className="m-4 d-flex flex-column justify-content-center align-item-center">
        <p className="w-text">{title}</p>

        
          {loading ? (
            <Spinner />
          ) : (
              com =="accounts" ? 
              <div className="wd">{
            data.map((item) => (
              <span class="btn btn-danger m-3 list-item">{item}</span>
            ))}</div> :
             (
                <ul class="list-group m-5 mt-1">
                {
                    data.map((item) => (
                        <li class="list-group-item li-text">{item}</li>
                      )) 
                }
                </ul>
             )
           
               
          )}
        
      </div>
    </>
  );
};
export default List;
