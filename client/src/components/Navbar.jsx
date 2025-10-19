import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <h1>The Omni Blog 🌌</h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
