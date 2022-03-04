import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/test">Game</Link>
      </div>
    </nav>
  );
};

export default Navbar;
