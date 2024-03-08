import React from "react";
import { FaChartLine } from "react-icons/fa6";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const tableHeader = ["Name", "Rank", "Symbol", "Icon", "Change", "Coin Detail"];

const Table = ({ coins }) => {

    console.log(coins);

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
            ({ name, symbol, iconUrl, change, coinrankingUrl, color }, index) => (
              <tr key={index}>
                <td className="fw-bold" style={{color: "gray"}}>{name}</td>
                <td className="fw-bold" style={{color: `${color}`}}>{index + 1}</td>
                <td className="fw-bold" style={{color: `${color}`}}>{symbol}</td>
                <td>
                    <img src={iconUrl} alt={name} width={30} height={30} />
                </td>
                <td style={{color: `${change > 0 ? 'green' : 'red'}`}}>
                    <div className="d-flex align-items-center">

                    {change > 0 ? <FaCaretUp /> : <FaCaretDown />}
                    {change}
                    </div>
                </td>
                <td style={{color: `${color}`}}>
                    <a href={coinrankingUrl} target="_blank" rel="noreferrer">
                        <FaChartLine style={{fontSize: "2rem", color: `#3CC8C8`}} />
                    </a>
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
