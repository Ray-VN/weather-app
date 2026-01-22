import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        WeatherApp
      </div>

      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="/forecast">Forecast</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}
