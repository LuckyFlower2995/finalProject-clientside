/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student, deleteStudent } = props;

  // Render a single Student view 
  return (
    <div>
      <p>{student.imageURL}</p>
      <h1>Full Name: {student.firstname + " " + student.lastname}</h1>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>
      <h2>Attends: </h2>

      <div key={student.campus.id}>
        if(student.campus.id == 0) {
          <div>
            <p>They are not enrolled in a campus.</p>
          </div>
        } else {
          <Link to={`/campus/${student.campus.id}`}>
            <h2>{student.campus.name}</h2>
          </Link>
        }
      </div>
      <div key={student.id}>
        <Link to={`/editstudent/${student.id}`}>
          <button>Edit Student Information</button>
        </Link>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </div>
       
    </div>
  );

};

export default StudentView;