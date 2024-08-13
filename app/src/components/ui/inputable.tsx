"use client";
import { useEffect, useState } from "react";
import { Input } from "./input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Inputable(props: { onChange?: (value: string) => void }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("Inputable");

  useEffect(() => {
    if (!isFocused && props.onChange) props.onChange(value);
  }, [isFocused]);

  function handleClick() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && isFocused) {
      setIsFocused(false);
    }
  }

  return (
    <div onClick={handleClick} className="w-full flex flex-start">
      {isFocused ? (
        <Input
          value={value}
          onInput={handleInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className=""
          autoFocus
        />
      ) : (
        <div className="flex h-10 w-full bg-background px-3 py-2 text-sm ring-offset-background file:border-0 disabled:cursor-not-allowed disabled:opacity-50">
          <span>{value}</span>
        </div>
      )}
    </div>
  );
}
