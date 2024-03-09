import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Table = ({ coins }) => {
  return (
    <div className="container d-flex flex-column">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th className="rank">Rank</th>
            <th className="symbol">Symbol</th>
            <th>Icon</th>
            <th>Change</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {coins.map(
            (
              { uuid, name, symbol, iconUrl, change, coinrankingUrl, color, rank, price }
            ) => (
              <tr key={uuid}>
                <td className="fw-bold" style={{ color: "gray" }}>
                  {name}
                </td>
                <td className="fw-bold rank" style={{ color: `${color}` }}>
                  {rank}
                </td>
                <td className="fw-bold symbol" style={{ color: `${color}` }}>
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
                <td className="fw-bold" style={{ color: `${color}` }}>${Number(price).toFixed(2)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
