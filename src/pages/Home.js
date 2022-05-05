import React from "react";
import { JumbotronContainer } from "../containers/JumbotronContainer";
import { FaqsContainer } from "../containers/FaqsContainer";
import { FooterContainer } from "../containers/FooterContainer";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
