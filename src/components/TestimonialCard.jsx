import React from "react";

const TestimonialCard = ({ image, name, rating, review }) => {
  return (
    <div>
      <div>
        <img loading="lazy" src={image} alt={`${name}'s profile`} />
        <div>
          {[...Array(rating)].map((_, i) => (
            <img
              key={i}
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3fa162aa0621d94cd46e1fb6d902c1fa9d0bdcadf6ad5feb9c6767521b08193?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83"
              alt=""
            />
          ))}
        </div>
      </div>
      <div>{name}</div>
      <div>{review}</div>
    </div>
  );
};
export default TestimonialCard;
