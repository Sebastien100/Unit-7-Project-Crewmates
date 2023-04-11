import "./Home.css";
import logo from "../assets/vindicators-removebg-preview.png";

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to the Vindicators Creator!</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Home;
