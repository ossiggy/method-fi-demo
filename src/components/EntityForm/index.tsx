import { ChangeEvent } from 'react';
import { Container, Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

interface EntityFormProps {
  first_name: string;
  last_name: string;
  phone: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EntityForm = ({first_name, last_name, phone, handleChange}: EntityFormProps) => {
  return (
    <Container
    style={{
      marginTop: '0.5rem'
    }}
    >
      <Form>
        <FormGroup row>
          <Col>
            <Label for="first_name">
              First Name
            </Label>
          </Col>
          <Col sm={10}> 
            <Input
              id="first_name"
              name="first_name"
              value={first_name}
              placeholder="John"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Label for="last_name">
              Last Name
            </Label>
          </Col>
          <Col sm={10}>
            <Input
              id="last_name"
              name="last_name"
              value={last_name}
              placeholder="Smith"
              onChange={handleChange}

            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Label for="phone">
              Phone
            </Label>
          </Col>
          <Col sm={10}>
            <Input
              id="phone"
              name="phone"
              value={phone}
              type="select"
              onChange={handleChange}
            >
              <option value="+15121231111">+15121231111</option>
            </Input>
          </Col>
        </FormGroup>
        <Button color="success">Submit</Button>
      </Form>
    </Container>
  )
}

export default EntityForm;