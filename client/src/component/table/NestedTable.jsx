import React from "react";

const NestedTable = ({ data }) => {
    console.log(data);
  const columns = Object.keys(data[0].transactions[0]);
  console.log(columns);
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((item) => (
                
              <th className="th">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data[0].transactions.map((item) => (
            <tr>
              {columns.map((it) => (
                <td>
                   {
                    item[`${it}`]
                   }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default NestedTable;
