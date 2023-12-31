import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Flash from "../../Components/Flashcard/Flash";
import Accordion from "../../Components/Accordion/Accordion";
import Tipcalc from "../../Components/TipCalculator/Tipcalc";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const About = () => {
  return (
    <div>
      <Navbar />
      <Flash />
      <Accordion data={faqs} />
      <Tipcalc/>
    </div>
  );
};

export default About;
