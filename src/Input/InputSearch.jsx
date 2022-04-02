import React, { useState } from "react";

export default function InputSearch() {
  const [characterName, setCharactersName] = useState("");

  const handleInput = (e) => {
    setCharactersName(e.target.value);
  };

  return {
    characterName,
    handleInput,
  };
}
