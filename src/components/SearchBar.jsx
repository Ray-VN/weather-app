import "./SearchBar.css";
import { useState } from "react";

export function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const API_KEY = "zz";

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=${API_KEY}&units=metric`,
    );
    const data = await response.json();
    setResults(data);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>

      <div>
        {/* {results.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))} */}

        {results ? <p>{results.name}</p> : <p>No data</p>}
      </div>
    </div>
  );
}
