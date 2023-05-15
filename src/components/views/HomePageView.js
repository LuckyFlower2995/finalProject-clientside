/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Link } from "react-router-dom";

const HomePageView = () => {
  // Render Home page view
  return (
    <div >
      <h1>Home Page</h1>
      <Link to={`/campuses`}>
              <h3>View Colleges</h3>
      </Link>
      <img src="https://picsum.photos/id/193/350/200" alt="college"/>
      <Link to={`/students`}>
              <h3>View Students</h3>
      </Link>
      <img src="https://picsum.photos/id/1/350/200" alt="student"/>
    </div>
  );    
}

export default HomePageView;