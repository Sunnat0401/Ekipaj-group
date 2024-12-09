import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";

const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
