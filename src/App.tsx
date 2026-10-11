import { ThemeProvider } from "./context/ThemeContext";
import Download from "./sections/Download";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Install from "./sections/Install";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Features />
      <Gallery />
      <Faq />
      <Install />
      <Download />
      <Footer />
    </ThemeProvider>
  );
}
export default App;
