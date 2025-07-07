export async function fetchPosts() {
  const Base_URL = "http://localhost:3002/api/cars";
  // const Base_URL = "http://172.50.1.150:3002/api/cars";
  const response = await fetch(Base_URL);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
