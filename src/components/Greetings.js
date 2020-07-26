import React from "react";

function Greetings(props) {
  function renderGreeting(lang) {
    const cases = {
      en: "Hello",
      es: "Hola",
      de: "Hallo",
      fr: "Bonjour",
    };
    return cases[lang];
  }
  return <div>{`${renderGreeting(props.lang)} ${props.children}`}</div>;
}

export default Greetings;
