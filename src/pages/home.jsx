import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Home</h1>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
