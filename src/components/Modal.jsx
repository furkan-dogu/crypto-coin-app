import Modal from "react-bootstrap/Modal";
import { FaChartLine } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

function ShowModal({ show, handleClose, info }) {
  const { name, symbol, price, iconUrl, change, rank } = info;
  return (
    <Modal show={show} onHide={handleClose} className="coin">
        <div className="remove-icon">
            <FaWindowClose onClick={handleClose} />
        </div>
      <h2 className="coin-name">
        <span>{name}</span>
        <sup>{symbol}</sup>
      </h2>
      <div className="coin-temp">$ {Number(price).toFixed(2)}</div>
      <figure>
        <img src={iconUrl} alt={name} width={100} />
        <figcaption style={{ color: `${change > 0 ? "green" : "red"}` }}>
          <FaChartLine />
          <span>{change || 0}%</span>
        </figcaption>
        <div>RANK:{rank}</div>
      </figure>
    </Modal>
  );
}

export default ShowModal;
