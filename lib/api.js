const apiUrl = import.meta.env.VITE_APP_API_URL;
const headers = { "Content-Type": "application/json" };

const getData = async () => {
  const response = await fetch(apiUrl, {
    method: "GET",
    headers,
  });

  const data = await response.json();
  return data;
};

export default getData;
