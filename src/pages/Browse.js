import React from "react";
import { useAuthListener, useContent } from "../hooks";

export default function Browse() {
  const { user } = useAuthListener();
  // console.log("This is USER UID:", user.uid);

  // We need the series and films, fetch them
  const { series } = useContent("series");
  console.log("SERIES: ", series);
  const { films } = useContent("films");
  console.log("FILMS: ", films);
  // We need slides for them

  // We need to pass it to the browse container

  return (
    <h1>
      Hello from Browse! Hello my DEAR
      {user.displayName}
    </h1>
  );
}
