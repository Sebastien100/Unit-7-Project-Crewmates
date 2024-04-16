import "./Home.css";
import logo from "../assets/COD2.png";

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome Soldier</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Home;
