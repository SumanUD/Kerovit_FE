import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/singleProduct.scss";

const SingleProduct = () => {

  const variants = [
    { sku: "KSR001-WH", image: "/product/1.jpg", alt: "White Variant" },
    { sku: "KSR001-BE", image: "/product/2.jpg", alt: "Beige Variant" },
    { sku: "KSR001-BR", image: "/product/3.jpg", alt: "Brown Variant" },
    { sku: "KSR001-BK", image: "/product/4.jpg", alt: "Black Variant" },
    { sku: "KSR001-AS", image: "/product/5.jpg", alt: "Red Variant" },
  ];


  const [selectedImage, setSelectedImage] = useState(variants[0].image);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionIndex) => {
    setOpenSection(openSection === sectionIndex ? null : sectionIndex);
  };

  return (
    <>
      <Navbar />

      <div className="singlePro">

        <img src={selectedImage} alt="Selected Product" className="main-image" />

        <div className="description">
          <h2>HYDRUS PLUS</h2>
          <p>MODEL NO.: KSR001</p>
          <p>SERIES: 1</p>

          <h3>Description</h3>
          <p>Single Lever Tall Basin Mixer</p>

          <h3>Variants</h3>
          <div className="variants">
            {variants.map((variant, index) => (
              <img
                key={index}
                src={variant.image}
                alt={variant.alt}
                className={`variant-image ${selectedImage === variant.image ? "active" : ""}`}
                onClick={() => setSelectedImage(variant.image)}
              />
            ))}
          </div>

          <button className="nearest-showroom-btn">NEAREST SHOWROOM</button>
        </div>


        <div className="dropdown-section">
          {["Features", "Installation & Service Parts", "Design Files", "Additional Information"].map((section, index) => (
            <div key={index} className="dropdown-item">
              <button onClick={() => toggleSection(index)}>
                {section} <span>{openSection === index ? "−" : "+"}</span>
              </button>
              {openSection === index && (
                <div className="dropdown-content">
                  <p>Content for {section} goes here...</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleProduct;
