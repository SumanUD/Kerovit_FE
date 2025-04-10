import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Career.scss";
import { FaWhatsapp } from "react-icons/fa";


const Career = () => {
    return (
        <>
            <Navbar />
            <main className="career">
            <div className="homebanner">
                <div className="bannerText">
                <p>Welcome</p>
                <p>to the <b>Kerovit</b></p>
                <p><b>team</b></p>
                </div>
                <FaWhatsapp className="whatsapp-icon" />
            </div>

            <div className="belowbanner">
                <div className="belowBannerText">
                <img src="/career/belowBannerText.png" alt="belowBannerText" />
                <p>Send us your resume at</p>
                <p className="mail">info@kerovit.com</p>
                </div>
            </div>

            

            </main>
            <Footer />
        </>
    );
};

export default Career;
