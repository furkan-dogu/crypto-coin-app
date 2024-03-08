import React from "react";

const tableHeader = ["Name", "Rank", "Symbol", "Icon", "Change", "Coin Detail"];

const Table = () => {
  return (
    <div className="container d-flex flex-column">
      <table className="table">
        <thead>
          <tr>
            {tableHeader.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>

        <tbody className="tbody">
            <tr>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
                <td>Name</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
