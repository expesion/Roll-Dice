import React, { useReducer } from "react";
import Die from "./Die";
import "./RollDice.css";

const dice = {
  die1: "one",
  die2: "two",
  rolling: false,
};
const reducer = (dice, action) => {
  if (action.type === "Set_Die1") {
    return { ...dice, die1: action.payload, rolling: true };
  }
  if (action.type === "Set_Die2") {
    return { ...dice, die2: action.payload, rolling: true };
  }
};
function RollDice({ sides = ["one", "two", "three", "four", "five", "six"] }) {
  const [state, dispatch] = useReducer(reducer, dice);
  const roll = () => {
    let die1 = sides[Math.floor(Math.random() * sides.length)];
    let die2 = sides[Math.floor(Math.random() * sides.length)];
    dispatch({ type: "Set_Die1", payload: die1 });
    dispatch({ type: "Set_Die2", payload: die2 });
  };
  return (
    <div className="RollDice">
      <div className="RollDice-Container">
        <Die face={state.die1} />
        <Die face={state.die2} />
      </div>

      <button onClick={roll}>{state.rolling ? "Rolling" : "Roll Dice"}</button>
    </div>
  );
}

export default RollDice;
