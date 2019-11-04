var Alert = ReactBootstrap.Alert;
var Badge = ReactBootstrap.Badge;
var Jumbotron = ReactBootstrap.Jumbotron;
var Container = ReactBootstrap.Container;
var Image = ReactBootstrap.Image;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Card = ReactBootstrap.Card;
var ListGroup = ReactBootstrap.ListGroup;
var Accordion = ReactBootstrap.Accordion;

class NodeItem extends React.Component {
  render() {
    return <div className="container">
	  <h1>{this.props.attributes.title}</h1>
	<hr />
<Container>
  <Row>
    <Col sm={8}>
 			 <Card body><p dangerouslySetInnerHTML={{__html: this.props.attributes.field_summary.processed}} /></Card>
			 <p></p>
 			 <Card body><p dangerouslySetInnerHTML={{__html: this.props.attributes.body.processed}} /></Card>
	</Col>

    <Col sm={4}>
<Card>
  <Card.Header><h3>Related Links</h3></Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item><ul>{this.props.attributes.field_related_links.map((related_link) => (
					  <li><a href={related_link.uri}>{ related_link.title }</a></li>
				))}</ul></ListGroup.Item>
  </ListGroup>
</Card>
<hr/>

<Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message.
  </p>
</Alert>

<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Question One?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Question two?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
	</Col>
  </Row>
</Container>


    </div>;
  }
}
