import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Cards.css";
function Cards() {
  return (
    <Container>
      <Row>
        <Col xs={4}>
          {["Primary"].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2 "
            >
              <Card.Header>Total active users:80</Card.Header>
              <Card.Body className="content">
                <Card.Title>New users</Card.Title>
                <Card.Text className="info">
                  <li>Users added this week: 6</li>
                  <li>Users added 2 months: 20</li>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={4}>
          {["Danger"].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Total public repositories:20</Card.Header>
              <Card.Body className="content">
                <Card.Title>Active public repositories</Card.Title>
                <Card.Text className="info">
                  <li>+5 this month</li>
                  <li>+26 in 3 months</li>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col xs={4}>
          {["Info"].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>User</Card.Header>
              <Card.Body className="content">
                <Card.Title>USERNAME 3 </Card.Title>
                <Card.Text className="info">
                  This space is to fill with the user info.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col xs={4}>
          {["Dark"].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>User</Card.Header>
              <Card.Body className="content">
                <Card.Title>USERNAME 4</Card.Title>
                <Card.Text className="info">
                  This space is to fill with the user info.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
export default Cards;
