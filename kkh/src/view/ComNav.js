import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components/macro";
const Parent = styled.div`
  margin: 1rem;
`;
const Children = styled.div`
  margin: 1rem;
`;

const ComNav = ({ children }) => {
  return (
    <>
      <Parent>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">KKH</Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Profile" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Project" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Project1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Project2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Study" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/study?id=android">
                  Android
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/study?id=kotlin">
                  Kotlin
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tips" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Tips1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Tips2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Etc" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Etc1</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Etc2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Children>{children}</Children>
      </Parent>
    </>
  );
};

export default ComNav;
