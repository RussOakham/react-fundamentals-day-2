import { useState } from "react";

const AddStudentForm = ({ onAddStudent }) => {
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentGrade, setNewStudentGrade] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudentName || !newStudentGrade) return;

    onAddStudent({ name: newStudentName, grade: newStudentGrade });
    setNewStudentName("");
    setNewStudentGrade("");
  };

  return (
    <div>
      <h3>Add New Student</h3>
      <label>
        Name:
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
        />
      </label>
      <label>
        Grade:
        <input
          type="text"
          value={newStudentGrade}
          onChange={(e) => setNewStudentGrade(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleAddStudent}>
        Add Student
      </button>
    </div>
  );
};

export default AddStudentForm;
