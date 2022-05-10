import React from "react";
import { SelectProfileContainer } from "./Profiles";

export function BrowseContainer({ slides }) {
  console.log(slides);

  const { films, series } = slides;
  return (
    <div>
      <SelectProfileContainer />
      <h2>Films categories:</h2>
      <ul>
        {films.map((film) => (
          <li>{film.title}</li>
        ))}
      </ul>

      <h2>Series categories:</h2>
      <ul>
        {series.map((serial) => (
          <li>{serial.title}</li>
        ))}
      </ul>
    </div>
  );
}
