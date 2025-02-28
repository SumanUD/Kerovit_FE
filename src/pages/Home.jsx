import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Home Page</h2>
        <p>Welcome to the home page! This is where your main content goes.</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
