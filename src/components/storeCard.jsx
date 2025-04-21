import "../styles/storeCard.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const StoreCard = ({
    storeHeader,
    storeImage,
    description,
    storeName,
    ownerName,
    storeDetails,
    storePhone,
    directionUrl
}) => {
    return (
        <main className="all-store-card">
            <div className="store-card">
                <div className="store-images">
                    <img src={storeHeader} alt="Store header" className="storeHeader" />
                    <img src={storeImage} alt="Store preview" className="store-image" />
                </div>
                <div className="store-text-contents">
                    <p className="desc">{description}</p>
                    <div className="store-info">
                        <h3 className="store-name">{storeName}</h3>
                        <p className="owner-name">{ownerName}</p>
                        <p className="store-details">{storeDetails}</p>
                        <p className="store-phone">
                            <FaPhoneAlt /> {storePhone}
                        </p>

                        <div className="actions">
                            <a href={directionUrl} target="_blank" rel="noopener noreferrer">
                                <button className="direction-btn">
                                    Get Direction{" "}
                                    <img
                                        src="/locate-our-store/arrow-top-right.png"
                                        alt="arrow-top-right"
                                        className="arrow-top-right"
                                    />
                                </button>
                            </a>
                            {/* <button type="button" className="swipe-btn">
                                Swipe <BsArrowRight className="right_arrow" />
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StoreCard;
