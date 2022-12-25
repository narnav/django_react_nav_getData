import * as React from "react";

import { useParams, useNavigate } from "react-router-dom";
import { getStudent, deleteStudent } from "../MyStudents";

export default function Student() {
  let navigate = useNavigate();
  let params = useParams();
  let student = getStudent(params.myStudentName);
  console.log(student);
  return (
    <main style={{ padding: "1rem", backgroundColor: "red" }}>
      <h2>Name: {student.name}</h2>
      <p>
        {student.name}: {student.age}
        <br></br>
        <img src={`/media/${student.img}`} alt="" />
      </p>
      <p>Due Date: {student.number}</p>
      <p>
        <button
          onClick={() => {
            deleteStudent(student.number);
            navigate("/students");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
