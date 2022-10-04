import "./TopNavBar.css";
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
        <ul>
          <li>
            <a href="#fas">Home</a>
          </li>
        </ul>
      </>
    </nav>
  );
}
export default TopNavBar;
