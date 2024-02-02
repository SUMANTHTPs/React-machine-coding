import React, { useState } from "react";
import "./App.css";

function App() {
  const initialArr1 = ["Item 1", "Item 2", "Item 3"];
  const initialArr2 = ["Item A", "Item B", "Item C"];

  const [arr1, setArr1] = useState(initialArr1);
  const [arr2, setArr2] = useState(initialArr2);

  const handleChange = (
    e,
    sourceArray,
    setSourceArray,
    targetArray,
    setTargetArray
  ) => {
    const value = e.target.value;
    const index = sourceArray.indexOf(value);

    if (index !== -1) {
      const temp = sourceArray[index];
      sourceArray[index] = targetArray[index];
      targetArray[index] = temp;

      setSourceArray([...sourceArray]);
      setTargetArray([...targetArray]);
    }
  };

  return (
    <>
      <h1>Swap checkbox labels</h1>
      <div className="container">
        <div className="container-inner">
          <h1>Container 1</h1>
          {arr1.map((label, index) => (
            <React.Fragment key={index}>
              <input
                onChange={(e) => handleChange(e, arr1, setArr1, arr2, setArr2)}
                type="checkbox"
                name="arr1"
                value={label}
                id={`arr1-${index}`}
              />
              <label htmlFor={`arr1-${index}`}>{label}</label>
            </React.Fragment>
          ))}
        </div>
        <div className="container-inner">
          <h1>Container 2</h1>
          {arr2.map((label, index) => (
            <React.Fragment key={index}>
              <input
                onChange={(e) => handleChange(e, arr2, setArr2, arr1, setArr1)}
                type="checkbox"
                name="arr2"
                value={label}
                id={`arr2-${index}`}
              />
              <label htmlFor={`arr2-${index}`}>{label}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
