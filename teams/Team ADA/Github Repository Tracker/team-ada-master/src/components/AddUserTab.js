import Nav from "react-bootstrap/Nav";
function AddUserTab() {
  return (
    <>
      <div className="row1">
        <div className="centrebox ">
          <div className="panel border bg-white">
            <Nav justify variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Add User</Nav.Link>
              </Nav.Item>
              <Nav.Item>
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
