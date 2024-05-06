import React, { useState }  from "react";
import Searchbar from "../components/Searchbar";

const Search = () => {
    const [searchResults, setSearchResults] = useState([]);

    // Funktion zum Verarbeiten der Suchergebnisse
    // Du kannst hier Logik hinzufügen, um die erhaltenen Suchergebnisse anzuzeigen oder zu verarbeiten
    const handleSearchResults = (results) => {
     setSearchResults(results);
    };
  
    return (
    <div>
      <h1>Search Page</h1>
      <Searchbar onSearch={handleSearchResults}/>
      {/* You can render search results or other components related to search here */}
      <div>
        {searchResults.map((result, index) => (
          <div key={index}>{/* Hier kannst du die einzelnen Suchergebnisse anzeigen */}</div>
        ))}
        </div>
    </div>
  );
};

export default Search;
