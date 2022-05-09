import React from "react";
import { useAuthListener } from "../hooks";

export default function Browse() {
  const { user } = useAuthListener();
  // console.log("This is USER UID:", user.uid);

  // We need the series and films, fetch them

  // We need slides for them

  // We need to pass it to the browse container

  return (
    <h1>
      Hello from Browse! Hello my DEAR
      {user.displayName}
    </h1>
  );
}
