import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setindex] = useState(0);
  const { name, id, job, text, image } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setindex((index) => {
      let newindex = index - 1;
      return checkNumber(newindex);
    });
  };
  const nextPerson = () => {
    setindex((index) => {
      let newindex = index + 1;
      return checkNumber(newindex);
    });
  };
  const randomPerson = () => {
    let randomnumber = Math.floor(Math.random() * people.length);
    if (randomnumber === index) {
      randomnumber = index + 1;
    }
    setindex(checkNumber(randomnumber));
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p classname="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft className="icon" />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight className="icon" />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};

export default Review;
