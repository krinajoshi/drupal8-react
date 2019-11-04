// Import not needed because React & ReactDOM are loaded by *.libraries.yml
// import React from 'react'; import ReactDOM from 'react-dom';

class NodeList extends React.Component {
	//Add a constructor to initialize the state
	constructor() {
    super();
    this.state = { data: null };
	this.loadNodeData = this.loadNodeData.bind(this);
	this.updateData = this.updateData.bind(this);


	}

	componentWillMount() {
		this.loadNodeData();
	}

	loadNodeData() {
    var path = drupalSettings.path.currentPath;
    var nid = path.split('/')[1]; // This assumes the path is like node/123
	  // This should point to your local Drupal instance.
	  const API_ROOT = window.location.origin;
	  const url = `${API_ROOT}/jsonapi/node/page?filter[drupal_internal__nid]=${nid}`;
	  console.log(url);


	   fetch(url)
		.then(function(response) {
		  return response.json();
		})
		//parses it as JSON, sends the data to updateData()
		.then((data) => this.updateData(data))
		.catch(err => console.log('API got an error', err))
	}

	// updateData() we use this.setState() to apply the newly obtained data to the component's state
	updateData(responseData) {
	  this.setState( { data: responseData.data }, () => console.log(this.state));
	}


render() {
  return (
    <div>
		{this.state.data !== null ?
        this.state.data.map((item,index) => <NodeItem {...item} />)
        :
        <NoData />
      }
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
