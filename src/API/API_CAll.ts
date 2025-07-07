export async function fetchPosts() {
  // const Base_URL = "http://localhost:3002/api/cars";
  const Base_URL = "https://car-blogify-backend.vercel.app/api/cars";
  const response = await fetch(Base_URL);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
