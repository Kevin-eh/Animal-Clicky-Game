import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Headertest from "./components/Headertest";
import FriendCard from "./components/FriendCard";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage =
  "See if you can click each villager without clicking the same one more than once! Careful, they'll scatter when clicked!";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    correctGuesses,
    bestScore,
    clickMessage
  };

  didAClick = id => {
    const friends = this.state.friends;

    const clickedMatch = friends.filter(friends => friends.id === id);

    if (clickedMatch[0].clicked) {
      console.log("Correct Guesses: " + correctGuesses);
      console.log("Best Score: " + bestScore);

      correctGuesses = 0;
      clickMessage = "Oops! You've already clicked them!";

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }

      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ friends });

      // Otherwise, if clicked = false, and the user hasn't finished
    } else if (correctGuesses < 11) {
      // Set its value to true
      clickedMatch[0].clicked = true;

      // increment the appropriate counter
      correctGuesses++;

      clickMessage = "Good Clicking!";

      if (correctGuesses > bestScore) {
        bestScore = correctGuesses;
        this.setState({ bestScore });
      }

      // Shuffle the array to be rendered in a random order
      friends.sort(function(a, b) {
        return 0.5 - Math.random();
      });

      // Set this.state.friends equal to the new friends array
      this.setState({ friends });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    } else {
      // Set its value to true
      clickedMatch[0].clicked = true;

      // restart the guess counter
      correctGuesses = 0;

      // Egg on the user to play again
      clickMessage = "Wow you did it! That's worthy of a party.";
      bestScore = 12;
      this.setState({ bestScore });

      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }

      // Shuffle the array to be rendered in a random order
      friends.sort(function(a, b) {
        return 0.5 - Math.random();
      });

      // Set this.state.friends equal to the new friends array
      this.setState({ friends });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Headertest></Headertest>
        <Title>
          <p>{clickMessage}</p>
          <p>Current Score: {correctGuesses} </p>
          <p>High Score: {bestScore}</p>
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            didAClick={this.didAClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
