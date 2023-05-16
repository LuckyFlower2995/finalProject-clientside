/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, students, deleteCampus, deleteStudent} = props;
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.imageURL}</p>
      <p>Address: {campus.address}</p>
      <p>Description: {campus.description}</p>
      <Link to={`editcampus/${campus.id}`}>
        <button>Edit Campus Information</button>
      </Link>
      <button onClick={() => deleteCampus(campus.id)}>Delete</button>
      <hr/>

      <h2>Students: </h2>
      {campus.students.map( student => {
        if (!students.length) {
          return (
          <div>
            <p>There are no students.</p>
          </div>
          );
        }

        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h3>{name}</h3>
            </Link>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>             
          </div>
        );
      })}

      <div>
        <Link to={`newstudent`}>
          <button>Add New Student</button>
        </Link>
      </div>
    </div>
  );
};

export default CampusView;