import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

export default function InputCpfCnpj() {
  const [input, setInput] = useState("");
  const [maskedInput, setMaskedInput] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value.replace(/\D/g, ""));
  }

  function mask(inputText: string) {
    const size = inputText.length;

    const array = Array.from(inputText);
    const result = new Array<string>();

    if (size > 11) {
      array.forEach((value, index) => {
        if (index === 2) result.push(".");
        if (index === 5) result.push(".");
        if (index === 8) result.push("/");
        if (index === 12) result.push("-");
        result.push(value);
      });
  
      return result.join('');
    }

    array.forEach((value, index) => {
      if (index === 3) result.push(".");
      if (index === 6) result.push(".");
      if (index === 9) result.push("-");
      result.push(value);
    });

    return result.join('');

    // if (size > 12) return `${inputText.slice(0,2)}.${inputText.slice(2,5)}.${inputText.slice(5,8)}/${inputText.slice(8,12)}-${inputText.slice(12)}`;
    // if (size > 11) return `${inputText.slice(0,2)}.${inputText.slice(2,5)}.${inputText.slice(5,8)}/${inputText.slice(8)}`;
    // if (size > 9) return `${inputText.slice(0,3)}.${inputText.slice(3,6)}.${inputText.slice(6,9)}-${inputText.slice(9)}`;
    // if (size > 6) return `${inputText.slice(0,3)}.${inputText.slice(3,6)}.${inputText.slice(6)}`;
    // if (size > 3) return `${inputText.slice(0, 3)}.${inputText.slice(3)}`;
  }

  useEffect(() => {
    setMaskedInput(mask(input));
  }, [input]);

  return (
    <>
      <h2>
        <strong>CPF / CNPJ</strong>
      </h2>
      <Input
        value={maskedInput}
        onChange={(e) => handleChange(e)}
        maxLength={18}
      />
    </>
  );
}

export const Input = styled.input`
  background-color: #fff;
  border-radius: 15px;
  height: 45px;
  outline: none;
  border: none;
  padding-left: 10px;
`;
