import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Single Product Page</h2>
        <img src="https://imgs.search.brave.com/eluQ2Rwhm7ctVNl1g_0xyCJyX3QaE6fI0n8wT8mV5FM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzI2LzAyLzMx/LzM2MF9GXzEwMjYw/MjMxNzZfUUVDRkpw/UWhuak9pTjhWaGk5/Q2NqSFBNVmtqeVla/bEUuanBn" alt="" width={"100%"}/>
        <p>Welcome to the Single Product page! This is where your main content goes.</p>
      </main>
      <Footer />
    </>
  );
};

export default SingleProduct;
