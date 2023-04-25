import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "./InputCpfCnpj";

export default function InputCelular() {
  const [input, setInput] = useState("");
  const [maskedInput, setMaskedInput] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("Log line 9: ", e.target.value);
    setInput(e.target.value.replace(/\D/g, ""));
  }

  function mask(inputText: string) {
    console.log('Log line 14: ',inputText)
    const size = inputText.length;
  
    if (size > 7)
      return `(${inputText.slice(0, 2)}) ${inputText.slice(
        2,
        7
      )}-${inputText.slice(7)}`;
    if (size > 2) return `(${inputText.slice(0, 2)}) ${inputText.slice(2)}`;
    return inputText;
  }

  useEffect(() => {
    setMaskedInput(mask(input));
  }, [input]);

  return (
    <>
      <h2>
        <strong>CELULAR</strong>
      </h2>
      <Input value={maskedInput} onChange={(e) => handleChange(e)} maxLength={15} />
    </>
  );
}

