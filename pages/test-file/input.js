import React, { useState } from 'react';

const DynamicInput = () => {
  const [inputs, setInputs] = useState([{value: ""}]);

  const handleInputChange = (event, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].value = event.target.value;
    setInputs(updatedInputs);
  };

  const addInput = () => {
    setInputs([...inputs, {value: ""}]);
  };
  
  console.log(inputs)

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <input type="text" value={input.value} onChange={(event) => handleInputChange(event, index)} />
        </div>
      ))}
      <button onClick={addInput}>Add Input</button>
    </div>
  );
};

export default DynamicInput;