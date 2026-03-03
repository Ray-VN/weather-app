import "./SearchWeather.css";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import Globe from "react-globe.gl"

export function SearchWeather() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("/countries.geojson")
      .then(res => res.json())
      .then(data => setCountries(data.features));
  }, []);
  return (
    <div>
      <NavBar />
      <SearchBar />
      <div style={{ height: "100vh" }}>
        <Globe polygonsData={countries} />
      </div>
    </div>
  );
}
