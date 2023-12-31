import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } =
    useContext(AuthContext);
  return (
    <>
      <Form onSubmit={loginUser}>
        <Row
          style={{
            height: "100vh",
            width: "60vh",
            marginLeft: "30%",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col sx={6}>
            <Stack gap={3}>
              <h2>Login de usuário</h2>

              <Form.Control
                type='email'
                placeholder='Email'
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />
              <Form.Control
                type='password'
                placeholder='Senha'
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />
              <Button variant='primary' type='submit'>
                {isLoginLoading ? "Autenticando..." : "Login"}
              </Button>
              {loginError?.error && (
                <Alert variant='danger'>
                  <p>{loginError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
