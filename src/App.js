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
    msg: "Click an image to begin!",
    topscore: 0,
    score: 0,
    unselected:friends
  };

 scoreChange = image => {
    const findImage = this.state.unselected.find(item => item.image === image);

    if(findImage === undefined) {
        // failure to select a new dog
        this.setState({ 
            msg: "You guessed incorrectly!",
            topscore: (this.state.score > this.state.topscore) ? this.state.score : this.state.topsscore,
            score: 0,
            friends: friends,
            unselected: friends
        });
    }
    else {
        // success to select a new dog
        const newImages = this.state.unselected.filter(item => item.image !== image);
        
        this.setState({ 
            msg: "You guessed correctly!",
            score: this.state.score + 1,
            friends: friends,
            unselected: newImages
        });
    }
  };

  /*moveImage = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
*/
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
