import Footer from "./Footer";
import "./HomePage.css"
import { Link } from "react-router-dom";
import HomePageBody from "./HomePageBody";

export default function HomePage() {
  return (
    <main>
      <header className="enterance-header">
        <img
          src="../images/iteration-1-images/logo.svg"
          className="logo-enterance"
          alt="Logo"
        />

        <div className="enterance">
          <p className="big-white-text">
            kod acıktırır <br /> pizza, doyurur
          </p>

          <Link to="/siparis" className="btn-danger">
            ACIKTIM
          </Link>

        </div>
      </header>
      <HomePageBody/>
      <Footer/>
    </main>
  );
}
