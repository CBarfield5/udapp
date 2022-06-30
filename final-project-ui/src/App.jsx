import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { Footer } from "./components/Footer/Footer";
import { Feed } from "./components/Feed/Feed";

function App() {
  return (
    <>
      <Navbar />
      <Feed />
      {/* <ProductGrid /> */}
    </>
  );
}

export default App;
