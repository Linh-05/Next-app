"use client";

import { useState } from "react";
export default function ServicesContainer(){
    let [name, setName] = useState("Linh");
    const [job, setJob] = useState("Sinh Vien");

  return(
    <div>
        <h1>Tên là {name} </h1>
        <p>Nghề nghiệp {job}</p>
        <button onClick={() => {
            setName("Cường")
        }}>Change Name</button>
    </div>
  )  
}