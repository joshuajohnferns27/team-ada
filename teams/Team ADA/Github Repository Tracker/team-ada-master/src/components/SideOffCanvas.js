import "./SideOffCanvas.css";
import { Outlet, Link } from "react-router-dom";
function SideOffCanvas() {
  return (
    <>
      <div
        class="offcanvas offcanvas-start text-bg-dark"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Menu
          </h5>

          <button
            type="button"
            className="btn btn-close btn-danger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body list">
          <p>
            <a href="/Dashboard">Home</a>
            <Link to="/UserGrid">View All Users</Link>
          </p>
          <div className="logout">
            <a href="/">Logout</a>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default SideOffCanvas;
