import React, {useState} from "React";

// TourCard renders individual tour details
const TourCard = ({id, name, info, price, image, onRemove}) => {
    // local state to toffle Read More / Show Less
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
          <img src={image} alt={name} />
          <div className="tour-info">
            <h2>{name}</h2>
            <h4>${price}</h4>
            <p>
              {/* Show full info if readMore is tru, other a slice */}
              {(readMore ? info : info.slice(0, 100) + "... ")}  
              <button onClick={() => setReadMore(!readMore)}>
                {/* Toggle button text */}
                {readMore ? 'Show Less' : 'Read More'}
              </button>
            </p>

            {/* Button: "Not Interested" removes the tour (calls onRemove(id)) */}
            <button className="btn-remove" onClick={() => onRemove(id)}>
              Not Interested
            </button>
          </div>
        </article>
      );
}

export default TourCard;