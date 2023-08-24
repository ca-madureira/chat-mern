import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <Navbar bg='dark' className='mb-4' style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to='/' className='link-light text-decoration-none'>
            Chat
          </Link>
        </h2>
        {user && <span className='text-warning'>{user?.name} está on</span>}
        <Nav>
          <Stack direction='horizontal' gap={3}>
            {user && (
              <>
                <Link
                  onClick={() => logoutUser()}
                  to='/login'
                  className='link-light text-decoration-none'
                >
                  Sair
                </Link>
              </>
            )}
            {!user && (
              <>
                <Link to='/login' className='link-light text-decoration-none'>
                  Login
                </Link>
                <Link
                  to='/register'
                  className='link-light text-decoration-none'
                >
                  Registrar
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
