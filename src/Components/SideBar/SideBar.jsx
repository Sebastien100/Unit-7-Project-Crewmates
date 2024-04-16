import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <li>
        <Link className="sidebar-link" to={`/`}>Home</Link>
      </li>
      <li>
        <Link className="sidebar-link" to={`/create`}>Create a Soldier</Link>
      </li>
      <li>
       <Link className="sidebar-link" to={`/gallery`}>Soldier Gallery</Link>
      </li>
    </div>
  );
}

export default SideBar;