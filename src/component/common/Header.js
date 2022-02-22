import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={`/`}>Home</Link>
        </div>
      </nav>
      <div className="clearfix mb-5"></div>
    </div>
  );
};
