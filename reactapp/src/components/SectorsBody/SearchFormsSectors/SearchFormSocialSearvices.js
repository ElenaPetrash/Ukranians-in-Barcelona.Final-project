import React, { useEffect, useState } from "react";
import CardSector from "./CardSectorHospitals";
import axios from "axios";
function SearchFile() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const search = () => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };
  useEffect(() => {
    const fetchHospitals = async () => {
      const res = await axios.get("http://localhost:5000/socials_services");
      setData(res.data);
    };
    fetchHospitals();
  }, []);
  return (
    <div className="search_body">
      <div className="inputDiv">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <CardSector items={search(data)} />
    </div>
  );
}
export default SearchFile;