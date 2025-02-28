import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Catalogue = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Catalogue Page</h2>
        <p>Welcome to the Catalogue page! This is where your main content goes.</p>
      </main>
      <Footer />
    </>
  );
};

export default Catalogue;
