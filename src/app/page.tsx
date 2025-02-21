import Header from "./components/header";
import Introduse from "./components/introduse";
import Skill from "./components/skill";
import Products from "./components/products";
import Footer from "./components/footer";
import Start from "./components/start"

export default function Home() {
  return (
    <div>
      <Start/>
      <Header/>
      <Introduse />
      <Products />
      <Skill />
      <Footer/>
    </div>
  );
}
