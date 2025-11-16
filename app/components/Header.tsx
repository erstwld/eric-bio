import "../app.css";

export function Header() {
  return (
    <nav className="navbar">
      <a href="/aboutme">About Me</a>
      <a href="/education">Education</a>
      <a href="/experience">Experience</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}
