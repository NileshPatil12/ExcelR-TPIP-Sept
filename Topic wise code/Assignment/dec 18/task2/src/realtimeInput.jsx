import React, { useState } from "react";

function RealTimeInput() {
  const [name, setName] = useState("");

  return (
    <>
      <div className="d-flex m-3 ">
        <h1 className="mr-4">Enter Your Name</h1>
        <input
          type="text"
          placeholder="Type your name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "5px", fontSize: "16px" }}
        />
      </div>
      <h1 className="m-3">Your name is : {name}</h1>
    </>
  );
}

export default RealTimeInput;
