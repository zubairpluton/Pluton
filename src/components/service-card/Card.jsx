import {
  BlockchainIcon,
  BlockchainIconWhite,
  Cardano,
} from "../../assets/images/index";
import { Link } from "react-router-dom";

const Card = ({ card_href, card_title, card_para }) => {
  return (
    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
      <Link to={card_href}>
        <div className="card">
          <div className="service-card-image">
            <img src={BlockchainIcon} className="black" alt="BlockChain" />
            <img src={BlockchainIconWhite} className="white" alt="BlockChain" />
          </div>
          <div className="service-card-heading">
            <h2>{card_title}</h2>
          </div>
          <div className="service-card-para">
            <p>{card_para}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
