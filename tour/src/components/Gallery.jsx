// Use useEffect to call the API and store data in useState.
import React, {useEffect, useState} from "React";
import TourCard from './TourCard';

// Gallery is responsible for fetching tours and rending the list
const Gallery = ({ tours, setTours, onRemove }) => {
    // Local state to manage loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Function to fetch data from the API 
    const fetchTours = async () => {
        try {
          const res = await fetch('https://course-api.com/react-tours-project');
          // Map the API data to only the field we need
          const data = await res.json(); 
          const trimmed = data.results.map((tour) => ({
            id: tour.id,
            name: tour.name,
            info: `Download count: ${tour.download_count}`,
            price: tour.price,
            image: tour.image,
          }));
          setTours(trimmed); // Save data to global state
          setLoading(false); // Set loading to false
        } catch (error) {
            console.log("Error fetching tours:", error);
          // Loading and error states 
          setError(true); // If fetch fails, show error
          setLoading(false); 
        }
      };

    // Run fetchTours once after the component mounts
    useEffect(() => {
        fetchTours();
    }, []); 

    // Render loading state
    if (loading) {
        return <h2>Something went wrong...</h2>;
    };

    // Render if no tour remain
    if(tours.length === 0) {
        return (
            <>
                <h2>No tours left</h2>;
                <button onClick={fetchTours}>Refresh</button>
            </>
        );
    };

        // Render the list of TourCards

        return (
            <section className="tour-list">
                {tours.map((tour) => {
                    return (
                        <TourCard
                            key={tour.id}
                            {...tour} // Spread operator to pass all tour properties
                            onRemove={onRemove} // Pass the remove function
                        />
                    );
                })}
            </section>
        );
    }; 

export default Gallery; 