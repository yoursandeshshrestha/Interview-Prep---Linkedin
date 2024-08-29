// Using fetch
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("Error fetching data:", error));
}, []);

// Using axios
useEffect(() => {
  axios
    .get("https://api.example.com/data")
    .then((response) => setData(response.data))
    .catch((error) => console.error("Error fetching data:", error));
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);
