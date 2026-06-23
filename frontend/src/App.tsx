import { useState } from "react";
import { places } from "./data/places";

function App() {
const [searchText, setSearchText] = useState("");
const filteredPlaces = places.filter(place =>
  place.name.toLowerCase().includes(searchText.toLowerCase())
);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Travel Local</h1>
      <p>Travel like a local.</p>
      
      <input
  type="text"
  placeholder="Search a destination..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
/>


      {filteredPlaces.map((place) => (
        <div
          key={place.id}
          style={{
            background: "white",
            padding: "16px",
            marginBottom: "12px",
            borderRadius: "8px",
          }}
        >
          <h2>{place.name}</h2>
          <p>{place.state}</p>
        </div>
      ))}
    </div>
  );
}

export default App;