import React, { useState } from 'react';

const TableGenerator = () => {
  const [number, setNumber] = useState(0);

  const handleNumberChange = (e) => {
    const enteredNumber = parseInt(e.target.value);
    setNumber(enteredNumber);
  };

  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= number; i++) {
      table.push(
        <tr key={i}>
          <td>{i}</td>
        </tr>
      );
    }
    return table;
  };

  return (
    <div>
      <input type="number" onChange={handleNumberChange} value={number} />
      <table>
        <tbody>
          {generateTable()}
        </tbody>
      </table>
    </div>
  );
};

export default TableGenerator;
