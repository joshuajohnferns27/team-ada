import Nav from "react-bootstrap/Nav";
import Add from "./useradd";
import "./AddUserTab.css";
function AddUserTab() {
  return (
    <>
      <div className="row1">
        <div className="centrebox ">
          <div className="panel border buttons">
            <Nav justify variant="tabs">
              <Nav.Item className="b1">
                <Nav.Link href="/useradd">Add User</Nav.Link>
              </Nav.Item>
              <Nav.Item className="b1">
                <Nav.Link href="/home">Add User Using CSV File</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddUserTab;
