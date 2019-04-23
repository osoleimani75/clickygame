import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import charachters from "./charachters.json";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    charachters: charachters
  };

  randomRender = id => {
    this.state.charachters.forEach((image) => {
      if (image.id === id) {
        if (image.cliked) {
          // $("#myModal").modal('toggle');
          alert('YOU LOST!! This card was previously selected.');
          this.setState({})
          this.resetGame();
          return false;
        }
        else {
          this.updateScore();
          image.cliked = true;
        }
        if (this.state.score >= this.state.highScore) {
          this.newHighScore();
        }
      }
    });
  }

  randomOrganize = (array) => {
    let copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    this.setState({ charachters: copy });
  }

  updateScore = () => {
    this.setState((newState) => ({
      score: newState.score + 1
    }), () => this.winning())
  }

  newHighScore = () => {
    this.setState((newState) => ({
      highScore: newState.score
    }))
  }

  winning = () => {
    if (this.state.score === this.state.charachters.length) {
      alert('YOU WIN!! congratulations!')
      this.setState({});
      this.resetGame();
    }
    else {
      setTimeout(() => {
        this.randomOrganize(this.state.charachters)
      }, 500);
    }
  }

  resetGame = () => {
    this.state.charachters.forEach((image) => {
      image.cliked = false;
    })
    this.setState({ score: 0 })
  }

  render() {
    return (
      <div>
      <div className="row">    
        <Nav score={this.state.score} highScore={this.state.highScore} />
        </div>
        <div className="row wrapper">
          {this.state.charachters.map(friend => {
            return <FriendCard
              {...friend}
              key={friend.id}
              randomRender={this.randomRender}
              randomOrganize={() => this.randomOrganize(this.state.charachters)}
            />;
          })}
      </div>
      </div>
  )};
}

export default App;
