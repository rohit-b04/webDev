
export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    // response.ok returns if it is error response or success
    throw new Error("Failed to fetch places");
  }
  return resData.places
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json()
  if(!response.ok) {
    throw new Error("Failed to update the places")
  }
  return resData.message
}
