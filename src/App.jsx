// App.jsx
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CourseItem from "./CourseItem.jsx";

import "./App.css";

export default function App() {
  const [courses, setCourses] = useState([
    "Data Structures",
    "Operating Systems",
    "Machine Learning",
    "React",
    "Database Management"
  ]);

  const moveCourse = (from, to) => {
    const updated = [...courses];
    const [movedItem] = updated.splice(from, 1);
    updated.splice(to, 0, movedItem);
    setCourses(updated);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <h1>Course List (Drag to Reorder)</h1>

        {courses.map((course, index) => (
          <CourseItem
            key={index}
            index={index}
            course={course}
            moveCourse={moveCourse}
          />
        ))}

        <h2>Updated Order:</h2>
        <ul className="output-list">
          {courses.map((c, i) => (
            <li key={i}>{i + 1}. {c}</li>
          ))}
        </ul>
      </div>
    </DndProvider>
  );
}
