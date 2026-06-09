import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  const searchButton = () => {
    if (text.trim() === "") return;
    onSearch(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Country Name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={searchButton}>Search</button>
    </div>
  );
}
