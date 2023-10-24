import data from "./data.json";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Countries from "./components/Countries";
import { useState } from "react";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleTyping = (typing) => {
    setIsTyping(typing);
  };
  return (
    <div className="bg-slate-900 p-4 relative">
      <Navbar />
      <SearchBar
        searchCountry={searchCountry}
        onSearchChange={setSearchCountry}
        onUserTyping={handleTyping}
      />
      <Countries data={data} searchCountry={searchCountry} isTyping={isTyping}/>
    </div>
  );
};

export default App;
