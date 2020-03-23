import React from "react";

export default function Calculate({ amount, handleAmount }) {
  return (
    <div>
      <input
        type="number"
        className="form-control"
        id="input-test"
        name="amount"
        placeholder="e.g. 100"
        value=80
        onChange={handleAmount}
      />
    </div>
  );
}
