// Import not needed because React & ReactDOM are loaded by *.libraries.yml
// import React from 'react';
// import ReactDOM from 'react-dom';

var Alert = ReactBootstrap.Alert;
var Badge = ReactBootstrap.Badge;

class NodeItem extends React.Component {
  render() {
    return <div>
      <h2>{this.props.attributes.title}</h2>
      {this.props.attributes.body && <div dangerouslySetInnerHTML={{__html: this.props.attributes.body.value}} />}
      {this.props.attributes.feild_re && <div dangerouslySetInnerHTML={{__html: this.props.attributes.field_re.uri}} />}
      {this.props.attributes.field_prim && <div dangerouslySetInnerHTML={{__html: this.props.attributes.field_prim.value}} />}
	  
    </div>;
  }
}

class NoData extends React.Component {
  render() {
    return <div>No articles found.</div>;
  }
}

class NodeList extends React.Component {
	constructor() {
    super();
    this.state = { data: null };	
	this.loadNodeData = this.loadNodeData.bind(this);
	this.updateData = this.updateData.bind(this); 
	 
	var path = drupalSettings.path.currentPath;
	var nid = path.split('/')[1]; // This assumes the path is like node/123
	console.log(path); 
		
  }
  
  componentWillMount() {
    this.loadNodeData();
  }

loadNodeData() {
  // This should point to your local Drupal instance.
  const API_ROOT = 'http://lightningoct.local/jsonapi/';
  const url = `${API_ROOT}node/page/`;
  
  console.log(url);

   fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then((data) => this.updateData(data))
    .catch(err => console.log('API got an error', err))
}

updateData(responseData) {
  console.log(responseData);
  this.setState( { data: responseData.data }, () => console.log(this.state));
}


render() {
  return (
    <div>      
		{this.state.data !== null ?
        this.state.data.map(item => <NodeItem {...item} />)
        :
        <NoData />
      }      
      <h4>
    Example heading <Badge variant="secondary">New</Badge>
  </h4>
	    <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>   
    </div>
  );
}
}

ReactDOM.render(
	<NodeList
    nid={document.getElementById('react-content').getAttribute('data-nid')}
  />,
  document.getElementById('react-app')
);
