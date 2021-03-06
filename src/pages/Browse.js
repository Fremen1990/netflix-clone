import React from "react";
import { useAuthListener, useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/BrowseContainer";

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

  return <BrowseContainer slides={slides} />;
}
