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

                <div className="carrerText">
                    <p>
                        Our passion is water. Are you a genuine team player? If so, why not make your way over to Hansgrohe, the successful brand-name company and one of the few global players in the sanitation industry. Whether you're still just starting out in your career, whether you want to gain practical experience alongside your studies, or whether you're looking for a new professional home: here, exciting career prospects await.
                    </p>
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
