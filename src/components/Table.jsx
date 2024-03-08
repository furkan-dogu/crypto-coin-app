import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const tableHeader = ["Name", "Rank", "Symbol", "Icon", "Change"];

const Table = ({ coins }) => {
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

        <tbody>
          {coins.map(
            (
              { uuid, name, symbol, iconUrl, change, coinrankingUrl, color, rank }
            ) => (
              <tr key={uuid}>
                <td className="fw-bold" style={{ color: "gray" }}>
                  {name}
                </td>
                <td className="fw-bold" style={{ color: `${color}` }}>
                  {rank}
                </td>
                <td className="fw-bold" style={{ color: `${color}` }}>
                  {symbol}
                </td>
                <td>
                  <a href={coinrankingUrl} target="_blank" rel="noreferrer">
                    <img src={iconUrl} alt={name} width={30} height={30} />
                  </a>
                </td>
                <td style={{ color: `${change > 0 ? "green" : "red"}` }}>
                  <div className="d-flex align-items-center">
                    {change > 0 ? <FaCaretUp /> : <FaCaretDown />}
                    {change}
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
