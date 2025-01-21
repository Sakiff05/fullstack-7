import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";

function Services() {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/products");
      setData(res.data);
      setTempData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleSearch(e) {
    const value = e.target.value;
    setData(
      tempData.filter((card) =>
        card.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  function handleSort(e) {
    const value = e.target.value;
    if (value == "name") {
      setData(tempData.toSorted((a, b) => a.title.localeCompare(b.title)));
    } else {
      setData([...tempData]);
    }
  }

  useEffect(() => {
    getData();
  }, [setData]);

  return (
    <div className="px-16 py-10 flex flex-col items-center gap-10">
      <h1 className="text-orange-500 font-bold text-5xl text-center">
        Our Services
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <input
          type="search"
          className="border p-3 rounded-full text-xl"
          placeholder="Search..."
          onChange={(e) => handleSearch(e)}
        />
        <select
          className="border p-3 rounded-full text-xl"
          onChange={(e) => handleSort(e)}
        >
          <option value="default">Default</option>
          <option value="name">Sort by name</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-5 mt-20">
        {data.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default Services;
