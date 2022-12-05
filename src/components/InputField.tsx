import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

function InputField({ todo, setTodo }: Props) {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter as task"
        className="input__box"
      ></input>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
}

export default InputField;
