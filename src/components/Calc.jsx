import "./Calc.css";
import { useState } from "react";
export const Calculator = () => {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="circle">
        <div className="calculator">
          <div className="logo">Calculator</div>
          <form action="">
            <div>
              <input
                type="text"
                className="screen"
                placeholder="0"
                value={value}
              />
            </div>
            <div>
              <input
                type="button"
                className="first-row-btn"
                value="AC"
                onClick={(e) => setValue("")}
              />
              <input
                type="button"
                className="first-row-btn"
                value="del"
                onClick={(e) => setValue(value.slice(0, -1))}
              />
              <input
                type="button"
                className="modified-button"
                value="/"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="8"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="9"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                className="modified-button"
                value="*"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="5"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="6"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                className="modified-button"
                value="+"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="2"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="3"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                className="modified-button"
                value="-"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="00"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="0"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="."
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                className="modified-button"
                value="="
                onClick={(e) => setValue(eval)}
              />
            </div>
          </form>
        </div>
        <div className="copy-right">
          <p>Made by "Adan Lodhi" © </p>
        </div>
      </div>
    </div>
  );
};
