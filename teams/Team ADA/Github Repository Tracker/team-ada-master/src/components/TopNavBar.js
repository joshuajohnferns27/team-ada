import "./TopNavBar.css";
import Navbar from 'react-bootstrap/Navbar';
function TopNavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark p-4">
      <>
        {" "}
        <button
          className="btn btn-dark"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="fa fa-bars hamburger"></i>
        </button>
      
          <Navbar.Brand href="/useradd">Add user</Navbar.Brand>
          
      </>
    </nav>
  );
}
export default TopNavBar;
