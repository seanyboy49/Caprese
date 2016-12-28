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
    return tags.filter(tag => {
      const regex = new RegExp(wordToMatch, 'gi')
      return tag.name.match(regex)
    })
  }

  displayMatches(e) {
    const suggestions = document.querySelector('.suggestions');
    const matchArray = this.findMatches(e.target.value, this.state.tags)
    matchArray.forEach(obj => console.log(obj))
    const html = matchArray.map(obj => {
      const tagName = obj.name
      return `
        <div class="tag-container">${tagName}</div>
      `;
    }).join('');
    suggestions.innerHTML = html
  }
  componentWillMount() {
    const tags = []
    fetch('http://localhost:3001/tags').then(blob => blob.json()).then(data => this.setState({tags: data.data}))
  }
  componentDidMount() {
    const searchInput = document.querySelector('.search');
    searchInput.addEventListener('keyup', this.displayMatches)
  }
  render() {
    return (
      <div>
        <h1>Tags</h1>
        <form className="search-form">
          <input type="text" className="search" placeholder="Search for a tag"/>
        </form>
        <div className="suggestions">

        </div>

      </div>
    )
  }
}

export default Tags
