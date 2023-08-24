import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Register = () => {
  const { registerInfo, updateRegisterInfo } = useContext(AuthContext);
  return (
    <>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "20%",
          }}
        >
          <Col sx={6}>
            <Stack gap={3}>
              <h2>Cadastro de usuário</h2>

              <Form.Control
                type='text'
                placeholder='Name'
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
                placeholder='Password'
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
              <Button variant='primary' type='submit'>
                Cadastrar
              </Button>

              <Alert variant='danger'>
                <p>Um erro ocorreu</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
