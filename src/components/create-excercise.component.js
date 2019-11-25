import React, { Component } from "react";

export default class CreateExcercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }
  componentDidMount() {
    this.setState({
      users: ["test user", "ashir", "nabeel"]
    });
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.id]: value
    });
  }
  saveUpdate() {
    let payload = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
  }
  render() {
    return (
      <div className="container">
        <form action="/action_page.php">
          <div className="form-group">
            <label for="username">Username:</label>
            <select
              className="form-control"
              id="username"
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              className="form-control"
              id="username"
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label for="username">Description:</label>
            <textarea
              className="form-control"
              id="description"
              onChange={this.handleChange.bind(this)}
            >
              {this.state.description}
            </textarea>
          </div>
          <div className="form-group">
            <label for="duration">Duration:</label>
            <input
              type="number"
              className="form-control"
              value={this.state.duration}
              id="duration"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label for="date">Date:</label>
            <input
              type="date"
              className="form-control"
              value={this.state.date}
              id="date"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
