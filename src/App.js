import React,
{
  Component
}

from "react";
import BirdCard from "./components/BirdCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import birds from "./birds.json";
import "./App.css";

function shuffle(friends) {
  for (let i=birds.length - 1;
  i > 0;
  i--) {
    const j=Math.floor(Math.random() * (i + 1));
    const birdsTemp=birds[i];
    birds[i]=birds[j];
    birds[j]=birdsTemp;
  }
  return birds;
}

;
class App extends Component {
  // Setting state values
  state= {
    birds: birds, msg: "Click image once to score!", topscore: 0, score: 0, unselected:birds, style:"wrapper"
  }
  ;
  scoreChange=image=> {
    const findImage=this.state.unselected.find(item=> item.image===image);
    if(findImage===undefined) {
      this.setState( {
        msg: "Game Over", topscore: (this.state.score > this.state.topscore) ? this.state.score: this.state.topscore, score: 0, birds: birds, unselected: birds, style:"wrapper shake"
      }
      );      
      this.moveImage();
    }
    else {
      const newImages=this.state.unselected.filter(item=> item.image !==image);
      this.setState( {
        msg: "You Scored!", score: this.state.score + 1, birds: birds, unselected: newImages, style:"wrapper"
      }
      );
      this.moveImage();
    }
  }
  ;
  moveImage=()=> {
    const birdsNew=shuffle(this.state.birds);
    // Set this.state.friends equal to the new friends array
    this.setState( {
      birds: birdsNew,
    }
    );
  }
  ;
  // render
  render() {
    return ( <div> <Navbar msg= {
      this.state.msg
    }
    title={
      "BIRDS"
    }
    score= {
      this.state.score
    }
    topscore= {
      this.state.topscore
    }
    /> <Wrapper style={
        this.state.style
      }> {
      this.state.birds.map(birds=> ( <BirdCard scoreChange= {
        this.scoreChange
      }
      moveImage= {
        this.moveImage
      }
      id= {
        birds.id
      }
      key= {
        birds.id
      }
      name= {
        birds.name
      }
      image= {
        birds.image
      }
      />))
    }
    </Wrapper> </div>);
  }
}

export default App;