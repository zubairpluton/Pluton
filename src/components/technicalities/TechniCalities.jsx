import {
  GameLogic,
  Metamask,
  NftContract,
  SmartContract,
  TokenIcon,
  UIicon,
} from "../../assets/images/index";

const TechniCalities = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="heading">
          <h1>Technicalities</h1>
          <span className="underline"></span>
        </div>
      </div>
      <div className="col-xlg-3 col-lg-3 col-md-4 col-sm-4 col-4">
        <div className="technicalities text-center">
          <div className="img">
            <img src={UIicon} alt="UI/UX" />
          </div>
          <div className="content">
            <p>UI/UX and graphics based on users’ preference</p>
          </div>
        </div>
      </div>
      <div className="col-xlg-3 col-lg-3 col-md-4 col-sm-4 col-4">
        <div className="technicalities text-center">
          <div className="img">
            <img src={SmartContract} alt="SmartContract" />
          </div>
          <div className="content">
            <p>Smart Contract</p>
          </div>
        </div>
      </div>
      <div className="col-xlg-3 col-lg-3 col-md-4 col-sm-4 col-4">
        <div className="technicalities text-center">
          <div className="img">
            <img src={TokenIcon} alt="Token Image" />
          </div>
          <div className="content">
            <p>Token ID</p>
          </div>
        </div>
      </div>
      <div className="col-xlg-3 col-lg-3 col-md-4 col-sm-4 col-4">
        <div className="technicalities text-center">
          <div className="img">
            <img src={GameLogic} alt="Game Logic" />
          </div>
          <div className="content">
            <p>Game Logic</p>
          </div>
        </div>
      </div>

      <div className="col-xlg-3 col-lg-3 col-md-4 col-sm-4 col-4">
        <div className="technicalities text-center">
          <div className="img">
            <img src={NftContract} alt="Nft Contract" />
          </div>
          <div className="content">
            <p>NFT Contract</p>
          </div>
        </div>
      </div>
      <div className="col-xlg-3 col-lg-3 col-md-4 col-sm-4 col-4">
        <div className="technicalities text-center">
          <div className="img">
            <img src={Metamask} alt="Meta Mask Integration" />
          </div>
          <div className="content">
            <p>Meta Mask integration</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechniCalities;
