import React from "react";
import { useAuthListener, useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const { user } = useAuthListener();
  // console.log("This is USER UID:", user.uid);

  // We need the series and films, fetch them
  const { series } = useContent("series");
  const { films } = useContent("films");

  // We need slides for them
  const slides = selectionFilter({ series, films });
  console.log(slides);

  // We need to pass it to the browse container

  return (
    <h1>
      Hello from Browse! Hello my DEAR
      {user.displayName}
    </h1>
  );
}

// TODO BROWSE CONTAINER 05:05
