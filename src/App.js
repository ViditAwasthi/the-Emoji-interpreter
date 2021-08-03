import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍎": "Red Apple",
  "🍓": "Strawberry",
  "🍒": "Cherries",
  "🥝": "Kiwi Fruit",
  "🍩": "Doughnut",
  "🌮": "Taco",
  "🍕": "Pizza",
  "🥪": "Sandwich",
  "🍟": "French Fries",
  "🍔": "Hamburger"
};
const emojies = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    const userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry! we don't have this in our Database";
    }
    setMeaning(meaning);
  }

  function itemClickHandler(item) {
    var clickedItemMeaning = emojiDictionary[item];
    setMeaning(clickedItemMeaning);
  }
  return (
    <div className="App">
      <nav
        style={{
          borderRadius: "1rem",
          backgroundColor: "#FFA0A0",
          padding: "1rem",
          fontWeight: "bolder",
          fontSize: "20px"
        }}
      >
        The Emoji Interpreter
      </nav>
      <input
        style={{
          padding: "0.5rem",
          borderRadius: "1rem",
          marginTop: "1rem",
          color: "#FFA0A0",
          fontWeight: "bold"
        }}
        onChange={onChangeHandler}
      ></input>
      <h4>{emojiMeaning}</h4>
      <h3
        style={{
          backgroundColor: "#FFA0A0",
          maxWidth: "200px",
          margin: "20px auto",
          padding: "0.5rem",
          borderRadius: "2rem"
        }}
      >
        Emojis We Know!
      </h3>
      <div
        style={{
          backgroundColor: "#FFA0A0",
          maxWidth: "400px",
          margin: "auto",
          padding: "1rem",
          borderRadius: "2rem"
        }}
      >
        {emojies.map((item) => {
          return (
            <span
              onClick={() => itemClickHandler(item)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
