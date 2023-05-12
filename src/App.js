import { useEffect, useState } from "react";
import "./app.css";
import Table from "./Table";
import axios from "axios";

//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////////SEARCH ON A DATATABLE

// function App() {
//   const [query, setQuery] = useState("");
//   const keys = ["first_name", "last_name", "email"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   };
// return (
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={Search(Users)} />}
//   </div>
// );
// }


////////////////////// API SEARCH

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [capacity, setCapacity] = useState([]);
  const [avail, setAvail] = useState([]);
  const [final, setFinal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  const filterCapacity = (e) => {
    const capacity = parseInt(e.target.value)
    const filtered = data?.filter((item) => item.capacity >= capacity)
    setCapacity(filtered)
    setFinal(filtered)

  }

  const filterAvailable = (e) => {
    let available;
    if (e.target.value === 'true') {
      available = true;
    } else {
      available = false
    }
    const filtered = capacity?.filter((item) => item?.available === available)
    setFinal(filtered)

  }

  console.log('all data', data)

  return (
    <div className="app">
      <p>Search by Capacity</p>
      <input
        className="search"
        type="number"
        placeholder="Search..."
        onChange={(e) => filterCapacity(e)}
      />
      <p>Search by Seat Capacity</p>

      <select
        style={{
          padding: '10px',
          width: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        name="available"
        id="available"
        onChange={(e) => filterAvailable(e)}
      >
        <option>Pilih </option>
        <option value={true}>Dengan Kunci</option>
        <option value={false}>Tanpa Kunci</option>
      </select>
      <p>Search by Type Driver</p>

      {<Table data={final} />}
    </div>
  );
}

export default App;
