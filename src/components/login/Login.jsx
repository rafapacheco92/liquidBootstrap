import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './login.css';

function Login() {
  return (
    <>
      <div className="containerLogin">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <FloatingLabel
                controlId="floatingInput"
                label="@"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="" />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel controlId="floatingPassword" label="Senha">
                <Form.Control type="password" placeholder="Senha" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel
                controlId="floatingPassword"
                label="Confirmar Senha"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Declaro que sou maior de 18 anos."
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Cadastar
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
