import React from "react";
import Slider from "./Slider";

const Section = ({ id, title, description, buttonText, buttonAction, sliderImages }) => (
  <section id={id}>
    {sliderImages && <Slider images={sliderImages} />}
    <h2 className="section-title">{title}</h2>
    <p>{description}</p>
    <button onClick={buttonAction}>{buttonText}</button>
  </section>
);

export default Section;
