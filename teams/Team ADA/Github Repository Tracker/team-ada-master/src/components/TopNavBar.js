import "./TopNavBar.css";
import Navbar from 'react-bootstrap/Navbar';
function TopNavBar() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div class="container">
        <a class="navbar-brand" href="#">Github Tracker</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars hamburger"></i>
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="/useradd">Add user</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Delete user</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/UserGrid">View all users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default TopNavBar;
