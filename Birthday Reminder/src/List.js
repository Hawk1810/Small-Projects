import { Aggregate } from "mongoose";
import React from "react";

const List = ({ person }) => {
  return (
    <>
      {person.map((people) => {
        const { age, name, id, image } = people;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
