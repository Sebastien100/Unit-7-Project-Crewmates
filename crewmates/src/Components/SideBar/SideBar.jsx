import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/create`}>Create a Crewmate</Link>
      </li>
      <li>
       <Link to={`/gallery`}>Crewmate Gallery</Link>
      </li>
    </div>
  );
}

export default SideBar;
