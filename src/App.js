import React,
{
  Component
}

from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";
import logo from './logo.png';

// Shuffle this.state.friends for friends     
function shuffle(friends) {
  for (let i=friends.length - 1;
  i > 0;
  i--) {
    const j=Math.floor(Math.random() * (i + 1));
    const friendsTemp=friends[i];
    friends[i]=friends[j];
    friends[j]=friendsTemp;
  }
  return friends;
}

;
class App extends Component {
  // Setting state values
  state= {
    friends: friends, msg: "Click image once to score!", topscore: 0, score: 0, unselected:friends
  }
  ;
  scoreChange=image=> {
    const findImage=this.state.unselected.find(item=> item.image===image);
    if(findImage===undefined) {
      this.setState( {
        msg: "Game Over", topscore: (this.state.score > this.state.topscore) ? this.state.score: this.state.topscore, score: 0, friends: friends, unselected: friends
      }
      );
      this.moveImage();
    }
    else {
      const newImages=this.state.unselected.filter(item=> item.image !==image);
      this.setState( {
        msg: "You Scored!", score: this.state.score + 1, friends: friends, unselected: newImages
      }
      );
      this.moveImage();
    }
  }
  ;
  moveImage=()=> {
    const friendsNew=shuffle(this.state.friends);
    // Set this.state.friends equal to the new friends array
    this.setState( {
      friends: friendsNew,
    }
    );
  }
  ;
  // render
  render() {
    return ( <div> <img src= {
      logo
    }
    className="logo img-responsive"/> <Navbar msg= {
      this.state.msg
    }
    score= {
      this.state.score
    }
    topscore= {
      this.state.topscore
    }
    /> <Wrapper> {
      this.state.friends.map(friend=> ( <FriendCard scoreChange= {
        this.scoreChange
      }
      moveImage= {
        this.moveImage
      }
      id= {
        friend.id
      }
      key= {
        friend.id
      }
      name= {
        friend.name
      }
      image= {
        friend.image
      }
      />))
    }
    </Wrapper> </div>);
  }
}

export default App;