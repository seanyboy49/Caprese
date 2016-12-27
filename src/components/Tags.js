import React from 'react';
import '../styles/SearchForm.css'


function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function displayMatches(e) {
  console.log(e)
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
  componentDidMount() {
    const searchInput = document.querySelector('.search-form')
    searchInput.addEventListener('keyup', displayMatches)
  }
  render() {
    return (
      <div>
        <h1>Tags</h1>
        <form className="search-form">
          <input type="text" placeholder="Search for a tag"/>
        </form>
      </div>
    )
  }
}

export default Tags
