import { useLocation } from "react-router-dom";

const StudentDetails = ({ students }) => {
  const location = useLocation();

  const studentId = location.pathname.split("students/").pop();
  const student = students.find(
    (student) => student.id === parseInt(studentId)
  );

  if (!student) {
    return <p>Student not found.</p>;
  }

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Grade: {student.grade}</p>
      <p>ID: {student.id}</p>
    </div>
  );
};

export default StudentDetails;
