import React, { useEffect, useState } from "react";
import "./Table.css";
import { getCustomerDetails, getTransactionDetails } from "../../api/apiCalls";
import Spinner from "../../common/Header/Spinner";
import NestedTable from "./NestedTable";
const UserDataTable = () => {
  const [show, setShow] = useState(-1);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nestedData, setNestedData] = useState([]);
  const [nestedLoading, setNestedLoading] = useState(false);
  useEffect(() => {
    getCustomerDetails(setUserData, setLoading);
  }, []);

  const columns = [
    { name: "Name", selector: "name", sortable: true },
    { name: "Address", selector: "address", sortable: true },
    { name: "Account", selector: "account", sortable: true },
    // Add more columns as needed
  ];
const handleCall = (id)=>{
  getTransactionDetails(setNestedData, setNestedLoading,id);
  console.log(nestedData);
}
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="table-wrapper">
          <table border={true} className="table">
            <thead>
              <tr>
                {columns.map((item) => {
                  return <th className="th">{item.name}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) =>
                item.active ? (
                  <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>
                      {item.accounts.map((it) => (
                        <button className="btn btn-danger m-2" onClick={() => {
                          setShow(index);
                          handleCall(it);
                        }}>
                          <span
                           
                            
                          >
                            {it}
                          </span>
                        </button>
                      ))}
                    </td>
                    
                  </tr>
                  { show===index ?
                  <tr>
                 <td colSpan={3}> {nestedLoading ?  <Spinner/>: <NestedTable data={nestedData} />}</td>
                  </tr> : ""
}
                  </>
                ) : (
                  ""
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default UserDataTable;
