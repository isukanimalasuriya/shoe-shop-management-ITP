import React, { useEffect } from 'react';
import axios from "axios";

const HRDashboard = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      try {
        const res = await axios.get("http://localhost:5000/api/hr-dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data);
        console.log(res.data); // Handle the data here
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    
    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <h2>HR Dashboard Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : error ? (
        <div>
          <h2>Error</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default HRDashboard