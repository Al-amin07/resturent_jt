
import "./App.css";
import About from "./components/about/About";
import Book from "./components/book/Book";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import PopularFood from "./components/popular-food/PopularFood";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="  ">
      <Navbar />
      <Header />
      <div className=" mt-[120px] space-y-[60px] lg:space-y-[120px] w-full mb-[120px]">
        <About />
        <PopularFood />
        <Book />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}

export default App;
