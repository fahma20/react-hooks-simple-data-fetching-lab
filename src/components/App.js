// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // State to manage the dog image URL and loading state
  const [dogImage, setDogImage] = useState(null);  // To hold the dog image URL
  const [isLoading, setIsLoading] = useState(true);  // To manage loading state

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch the dog image URL from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())  // Parse the response as JSON
      .then((data) => {
        // Set the dog image URL from the API response
        setDogImage(data.message);
        setIsLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false);  // Stop loading even in case of error
      });
  }, []); // Empty array ensures this effect runs only once after initial render

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>  // Show "Loading..." while fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" />  // Show the dog image after it's fetched
      )}
    </div>
  );
}

export default App;
