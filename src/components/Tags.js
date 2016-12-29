import React from 'react';
import $ from 'jquery'
import '../styles/SearchForm.css'

class Tags extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tags: null
    }
    this.displayMatches = this.displayMatches.bind(this);
    this.findMatches = this.findMatches.bind(this);
    this.handleNewTag = this.handleNewTag.bind(this);
  }
  findMatches(wordToMatch, tags) {
    return tags.filter(tag => {
      const regex = new RegExp(wordToMatch, 'gi')
      return tag.name.match(regex)
    })
  }
  handleNewTag(e) {
    const newTag = e.target.children[0].value
    console.log(newTag)
    $.ajax({
      url: 'http://localhost:3001/tags',
      method: 'post',
      data: {tag: {name: newTag}},
      success: (response) => {
        const newState = this.state.tags.concat(response)
        this.setState({tags: newState})
        console.log('It worked!', response)
      }
    })
  }
  displayMatches(e) {
    console.log(e.target)
    const suggestions = document.querySelector('.suggestions');
    const matchArray = this.findMatches(e.target.value, this.state.tags)

    const html = matchArray.map(obj => {
      const tagName = obj.name
      return `
        <div key=${obj.id} class="tag-container">${tagName}</div>
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
      <form className="search-form" onSubmit={this.handleNewTag}>
          <input type="text" className="search" placeholder="Search for a tag"/>
        </form>
        <div className="suggestions">

        </div>

      </div>
    )
  }
}

export default Tags
