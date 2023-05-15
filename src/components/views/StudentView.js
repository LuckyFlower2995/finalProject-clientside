/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <p>{student.imageURL}</p>
      <h1>Full Name: {student.firstname + " " + student.lastname}</h1>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>
      
      <div key={student.campus.id}>
        <Link to={`/campus/${student.campus.id}`}>
          <h2>Attends: {student.campus.name}</h2>
        </Link>
      </div>
      
    
       
    </div>
  );

};

export default StudentView;