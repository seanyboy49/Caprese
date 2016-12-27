import React from 'react';

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

class Tags extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tags: null
    }
  }
  componentWillMount() {
    const tags = []
    fetch('http://localhost:3001/tags').then(blob => blob.json()).then(data => this.setState({tags: data}))
  }
  render() {
    return (
      <div>
        <h1>Tags</h1>
        {puke(this.state.tags)}
      </div>
    )
  }
}

export default Tags
