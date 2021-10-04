import React, { useState } from "react";

const Tour = ({ id, image, price, name, info, removeTours }) => {
  const [readMore, setreadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 100)}`}
          <button onClick={() => setreadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>
          Not Intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
