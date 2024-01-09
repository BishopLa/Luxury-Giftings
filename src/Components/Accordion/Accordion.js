import React, { useState } from "react";
import classes from "./Accordion.module.css";

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`${classes.item} ${isOpen ? classes.open : ""}`}
      onClick={handleToggle}
    >
      <p className={classes.number}>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className={classes.title}>{title}</p>
      <p className={classes.icon}>{isOpen ? "-" : "+"}</p>
      {isOpen && <div className={classes.content_box}>{children}</div>}
    </div>
  );
}

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className={classes.accordion}>
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="What framework are you working with?"
        num={3}
        key="Text One"
      >
        <p>React, which is arguably the best in terms of reusability</p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
