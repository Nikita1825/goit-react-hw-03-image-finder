import { Component } from "react";

export class Searchbar extends Component {
  state = {
    value : " "
  }
  
  hundleSubmit = e => {
    e.preventDefault();
     this.props.onSearch(this.state.value);
  }
  handleChange = e => {
     const { value } = e.target;
     this.setState({ value });
  }
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.hundleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}