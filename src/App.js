import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      question: []
      
    }
  }
  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=1&category=25')
      .then(results => {
        return results.json();
      })
       .then(data => {
        
        let question = data.results.map((q) => {
          return (
            <div key={q.results}>
              <h2>{q.question}.</h2>
            </div>
          )
        })
        
        this.setState({ question: question });
       
        console.log("state", this.state.question);
      });
  }

  refresh(event) {
   
    this.setState({ question: [] });
    fetch('https://opentdb.com/api.php?amount=1&category=25')
    .then(results => {
      return results.json();
    })
    .then(data => {
      
      let question = data.results.map((q) => {
        return (
          <div key={q.results}>
            <h2>{q.question} </h2>
          </div>
        )
      })
    
      this.setState({ question: question });
     
      console.log("state", this.state.question);
    });
    
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <h1>Random Art Question Generator</h1>
    <br></br>
    <br></br>
          {this.state.question}
          <button type="button" onClick={this.refresh.bind(this)}>New Art Trivia Question!</button>
        </div>
      </div>
    );
  }
}
export default App;