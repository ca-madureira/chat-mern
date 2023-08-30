import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);
  return (
    <>
      <Form onSubmit={registerUser}>
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
              <h2>Cadastro de usuário</h2>

              <Form.Control
                type='text'
                placeholder='Nome'
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />
              <Form.Control
                type='email'
                placeholder='Email'
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />
              <Form.Control
                type='password'
                placeholder='Senha'
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
              <Button variant='primary' type='submit'>
                {isRegisterLoading ? "Criar sua conta" : "Cadastrar"}
              </Button>
              {registerError?.error && (
                <Alert variant='danger'>
                  <p>{registerError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
