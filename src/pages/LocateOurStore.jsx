import Navbar from "../components/Navbar";
// import Header from "../components/Header";
import Footer from "../components/Footer"
import { FaWhatsapp } from "react-icons/fa";
import "../styles/LocateOurStore.scss";
import StoreCard from "./Categories/storeCard";

const LocateOurStore = () => {
    return (
        <>
            <Navbar />
            <main className="store">
                <div className="banner">
                    <div className="bannerText">
                        <h2>locate</h2>
                        <h1 className="h2second">our store</h1>
                    </div>
                    <FaWhatsapp className="whatsapp-icon" />
                </div>

                <div className="store-form-container">
                    <form className="store-form">
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <input type="text" id="name" placeholder="" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobile">Mobile*</label>
                            <input type="tel" id="mobile" placeholder="" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input type="email" id="email" placeholder="" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city">City/State*</label>
                            <select id="city" required>
                                <option value="">Select</option>
                                <option value="andhra-pradesh">Andhra Pradesh</option>
                                <option value="arunachal-pradesh">Arunachal Pradesh</option>
                                <option value="assam">Assam</option>
                                <option value="bihar">Bihar</option>
                                <option value="chhattisgarh">Chhattisgarh</option>
                                <option value="goa">Goa</option>
                                <option value="gujarat">Gujarat</option>
                                <option value="haryana">Haryana</option>
                                <option value="himachal-pradesh">Himachal Pradesh</option>
                                <option value="jharkhand">Jharkhand</option>
                                <option value="karnataka">Karnataka</option>
                                <option value="kerala">Kerala</option>
                                <option value="madhya-pradesh">Madhya Pradesh</option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="manipur">Manipur</option>
                                <option value="meghalaya">Meghalaya</option>
                                <option value="mizoram">Mizoram</option>
                                <option value="nagaland">Nagaland</option>
                                <option value="odisha">Odisha</option>
                                <option value="punjab">Punjab</option>
                                <option value="rajasthan">Rajasthan</option>
                                <option value="sikkim">Sikkim</option>
                                <option value="tamil-nadu">Tamil Nadu</option>
                                <option value="telangana">Telangana</option>
                                <option value="tripura">Tripura</option>
                                <option value="uttar-pradesh">Uttar Pradesh</option>
                                <option value="uttarakhand">Uttarakhand</option>
                                <option value="west-bengal">West Bengal</option>


                                <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
                                <option value="chandigarh">Chandigarh</option>
                                <option value="dadra-nagar-haveli-daman-diu">Dadra & Nagar Haveli and Daman & Diu</option>
                                <option value="delhi">Delhi</option>
                                <option value="jammu-kashmir">Jammu and Kashmir</option>
                                <option value="ladakh">Ladakh</option>
                                <option value="lakshadweep">Lakshadweep</option>
                                <option value="puducherry">Puducherry</option>
                            </select>

                        </div>

                        <div className="form-group">
                            <textarea placeholder="Message"></textarea>
                        </div>

                        <button type="submit" className="submit-btn">SUBMIT</button>
                    </form>
                </div>

                <StoreCard
                    storeHeader="/locate-our-store/store1Header.png"
                    storeImage="/locate-our-store/store1.png"
                    description="Find the finest collection of tiles and sanitary essentials."
                    storeName="Yash Tiles & Sanitary House"
                    ownerName="Mr. Atul"
                    storeDetails="Located in the heart of Delhi, offering a wide range of home improvement products."
                    storePhone="9810433444"
                    directionUrl="https://www.google.com/maps/dir/?api=1&destination=28.6139,77.2090"
                />

                <StoreCard
                    storeHeader="/locate-our-store/store2Header.png"
                    storeImage="/locate-our-store/store2.png"
                    description="Find the finest collection of tiles and sanitary essentials."
                    storeName="Mangal Traders"
                    ownerName="Mr. Satish"
                    storeDetails="Located in the heart of Delhi, offering a wide range of home improvement products."
                    storePhone="9810433444"
                    directionUrl="https://www.google.com/maps/dir/?api=1&destination=28.6139,77.2090"
                />

                <StoreCard
                    storeHeader="/locate-our-store/store3Header.png"
                    storeImage="/locate-our-store/store3.png"
                    description="Find the finest collection of tiles and sanitary essentials."
                    storeName="Creative Paints & Hardware"
                    ownerName="Mr. Wasim"
                    storeDetails="Located in the heart of Delhi, offering a wide range of home improvement products."
                    storePhone="9810433444"
                    directionUrl="https://www.google.com/maps/dir/?api=1&destination=28.6139,77.2090"
                />

            </main>
            <Footer />
        </>
    );
};

export default LocateOurStore;