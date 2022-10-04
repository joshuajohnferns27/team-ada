import "./SideOffCanvas.css";
import TopNavBar from "./TopNavBar";
import { Outlet, Link } from "react-router-dom";
function SideOffCanvas() {
  return (
    <>
      <TopNavBar></TopNavBar>

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
            <a href="/">Home</a>
            <Link to="/">Logout</Link>
          </p>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default SideOffCanvas;
