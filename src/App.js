import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends : friends,
    msg: "Click image once to score!",
    topscore: 0,
    score: 0,
    unselected:friends
  };

 scoreChange = image => {
    const findImage = this.state.unselected.find(item => item.image === image);

    if(findImage === undefined) {
        this.setState({ 
            msg: "You clicked image twice!",
            topscore: (this.state.score > this.state.topscore) ? this.state.score : this.state.topscore,
            score: 0,
            friends: friends,
            unselected: friends
        });
    }
    else {
        const newImages = this.state.unselected.filter(item => item.image !== image);
        
        this.setState({ 
            msg: "You clicked image, Score!",
            score: this.state.score + 1,
            friends: friends,
            unselected: newImages
        });
    }
  };

  moveImage = image => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar
            title="CLICKY GAME"
            msg={this.state.msg}
            score={this.state.score}
            topscore={this.state.topscore}
          />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            scoreChange={this.scoreChange}
            moveImage={this.moveImage}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
