import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";
import StudentDetails from "./components/StudentDetails";

import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", grade: "A" },
    { id: 2, name: "Jane Doe", grade: "B" },
    { id: 3, name: "Sam Doe", grade: "C" },
  ]);

  const addStudent = (newStudent) => {
    setStudents([...students, { id: students.length++, ...newStudent }]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/add-student">Add Student</Link>
            </li>
          </ul>
        </nav>
      </div>

      <hr />

      <Routes>
        <Route path="/" element={<h1>Welcome to the Student Portal</h1>} />
        <Route path="/students" element={<StudentList students={students} />} />
        <Route
          path="/add-student"
          element={<AddStudentForm onAddStudent={addStudent} />}
        />
        <Route
          path="/students/:id"
          element={<StudentDetails students={students} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
