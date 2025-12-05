import { useState } from "react";
import "./starRating.css";

export default function StarRating({ initial = 0, onRate }) {
  const [rating, setRating] = useState(initial);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            (hover || rating) >= star ? "star star--filled" : "star"
          }
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
