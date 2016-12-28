import React from 'react';
import '../styles/SearchForm.css'

class Tags extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tags: null
    }
    this.displayMatches = this.displayMatches.bind(this);
    this.findMatches = this.findMatches.bind(this);
  }
  findMatches(wordToMatch, tags) {
    console.log(wordToMatch, tags)
  }

  displayMatches(e) {
    this.findMatches(e.target.value, this.state.tags)
  }
  componentWillMount() {
    const tags = []
    fetch('http://localhost:3001/tags').then(blob => blob.json()).then(data => this.setState({tags: data.data}))
  }
  componentDidMount() {
    const searchInput = document.querySelector('.search')
    searchInput.addEventListener('keyup', this.displayMatches)
  }
  render() {
    return (
      <div>
        <h1>Tags</h1>
        <form className="search-form">
          <input type="text" className="search" placeholder="Search for a tag"/>
        </form>

      </div>
    )
  }
}

export default Tags
