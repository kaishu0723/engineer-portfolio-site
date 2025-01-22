//Memo
//style
//Image

import Header from "./components/header";
import Introduse from "./components/introduse";
import Skill from "./components/skill";
import Products from "./components/products";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Introduse />
      <Skill />
      <Products />
      <Footer/>
    </div>
  );
}
