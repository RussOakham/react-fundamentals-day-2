import { Link } from "react-router-dom";

const StudentList = ({ students }) => {
  return (
    <ul>
      {students.map((student) => (
        <Link
          to={`${student.id}`}
          key={student.id}
          style={{ textDecoration: "none" }}
        >
          <li>{student.name}</li>
          <li>{student.grade}</li>
          <hr style={{ width: "50px" }} />
        </Link>
      ))}
    </ul>
  );
};

export default StudentList;
