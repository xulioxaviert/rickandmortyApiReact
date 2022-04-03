import { useState } from "react";

export default function InputSearch() {
  const [characterName, setCharactersName] = useState("");

  const handleChange = (e) => {
    setCharactersName(e.target.value);
  };

  return {
    characterName,
    handleChange,
  };
}
