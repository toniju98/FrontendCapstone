import Navbar from "../src/Navbar/Navbar";
import Hero from "../src/Hero/Hero";
import Footer from "../src/Footer/Footer";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";
import Chicago from "./Chicago/Chicago";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specials/>
        <Testimonials/>
        <Chicago/>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
