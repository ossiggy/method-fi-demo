import { Col, Row, ListGroupItem } from 'reactstrap';

const AccountHeaders = () => {
  return (
    <ListGroupItem>    
      <Row>
        <Col>
          Account ID
        </Col>
        <Col>
          Account Name
        </Col>
        <Col>
          Amount (cents)
        </Col>
        <Col>
          Make Payment
        </Col>
        <Col>
          Payment Id
        </Col>
      </Row>
    </ListGroupItem>
  )
}

export default AccountHeaders