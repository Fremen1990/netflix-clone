import React from "react";
import { useAuthListener } from "../hooks";

export default function Browse() {
  const { user } = useAuthListener();
  // console.log("This is USER UID:", user.uid);

  return (
    <h1>
      Hello from Browse! Hello my DEAR
      {user.displayName}
    </h1>
  );
}
