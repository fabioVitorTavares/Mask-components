import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "./InputCpfCnpj";

export default function InputCelular() {
  const [input, setInput] = useState("");
  const [maskedInput, setMaskedInput] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value.replace(/\D/g, ""));
  }

  function mask(inputText: string) {
    const size = inputText.length;
  
    if (size > 10) return `(${inputText.slice(0, 2)}) ${inputText.slice(2,7)}-${inputText.slice(7)}`;
    if (size > 6) return `(${inputText.slice(0, 2)}) ${inputText.slice(2,6)}-${inputText.slice(6)}`;
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

