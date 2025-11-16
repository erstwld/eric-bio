import "../app.css";
import { Link } from "react-router";

export function Header() {
  return (
    <nav className="navbar">
      <Link to="/">About Me</Link>
      <Link to="/education">Education</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
