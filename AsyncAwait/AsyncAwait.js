async function fetchData() {
  // This function is now asynchronous
  return "Data fetched successfully!";
}

fetchData().then((data) => console.log(data));
// Logs: "Data fetched successfully!"

async function fetchUserData() {
  const response = await fetch("https://api.example.com/user");
  const user = await response.json();
  console.log(user);
  // Waits for the fetch to complete and then logs user data
}

fetchUserData();

async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

fetchUserData();
// Logs error message if the fetch fails
