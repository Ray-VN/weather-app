import "./SearchBar.css";
import { useState } from "react";

export function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  // const API_KEY = "YOUR_API";
  const API_KEY = "65b0bd7e187fa53a715d25a396e03000";


  const handleSearch = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=${API_KEY}&units=metric`,
    );
    const data = await response.json();
    setResults(data);
  };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="content">
        {results ? (
          <p>
            {results ? (
              Object.keys(results).map((key) => (
                <p key={key}>
                  {key}: {String(results[key])}
                </p>
              ))
            ) : (
              <p>No data</p>
            )}
          </p>
        ) : (
          <p>No data</p>
        )}
      </div>
    </>
  );
}
