import React, { useState } from "react";
import classes from "./Tipcalc.module.css";

const Tipcalc = () => {
  const [bill, setBill] = useState("");
  const [percentage1, SetPercentage1] = useState(0);
  const [percentage2, SetPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    SetPercentage1();
    SetPercentage2(0);
  }

  return (
    <div className={classes.container}>
      <div className={classes.innercontainer}>
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectPercentage percentage={percentage1} onSelect={SetPercentage1}>
          How did you like the service?
        </SelectPercentage>
        <SelectPercentage percentage={percentage2} onSelect={SetPercentage2}>
          How did your friend like the service?
        </SelectPercentage>
      </div>
      <div className={classes.billcontainer}>
        {bill > 0 && (
          <>
            <Output bill={bill} tip={tip} />
            <Reset onReset={handleReset} />
          </>
        )}
      </div>
    </div>
  );
};

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Average(5%)</option>
        <option value="10">Good(10%)</option>
        <option value="20">Excellent experience! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className={classes.Billz}>
      <h2>Total Payment is {bill + tip} USD</h2>
      <h3>
        <span>
          (${bill} + ${tip} tip)
        </span>
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Tipcalc;
