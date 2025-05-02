import "./assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import Drawer from "./components/common/Drawer";
import Router from "./router/router";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = (): JSX.Element => {

  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className="drawer-content">
        <Header/>
        <section className="main pt-16">
          <Router />
        </section>
        <Footer/>
      </section>
      <Drawer />
    </BrowserRouter>
  );
};

export default App;
