import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import ErrorModal from "./ErrorModal.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "./hooks/useFetch.js";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();
  // const response = await fetch("http://localhost:3000/places");
  // const resData = await response.json();

  // if (!response.ok) {
  //   // response.ok returns if it is error response or success
  //   throw new Error("Failed to fetch places");
  // }
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      //console.log(position);
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );
    resolve (sortedPlaces)
    });
    
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    userData: availablePlaces,
    error,
    setUserData: setAvailablePlaces,
  } = useFetch(fetchSortedPlaces, []);

  // useEffect(() => {
  //   async function fetchPlaces() {
  //     setIsFetching(true);

  //     try {

  //       setIsFetching(false);
  //     } catch (error) {
  //       setError({
  //         message:
  //           error.message || "Could not fetch places, please try again later.",
  //       });
  //       setIsFetching(false);
  //     }
  //   }
  //   // fetch("http://localhost:3000/places")  // fetch () provided directly by browser.
  //   //   .then((response) => {
  //   //     return response.json();
  //   //   })
  //   //   .then((resData) => {
  //   //     setAvailablePlaces(resData.places);
  //   //   });
  //   fetchPlaces();
  // }, []); // we are taking benefit of useEffect() as without useEffect the request will be sent and promise and response will be recieve infinitely updating the availablePlaces state everytime.

  if (error) {
    return <ErrorModal title="Error Ocurred" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      loadingText="Please wait while loading the page"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
