import React, { Component } from "react";
import Image from "./image";
import Navbar from "./navBar";
import { Container, Row, Col } from "reactstrap";
const url =
  "https://i.pinimg.com/originals/b9/cb/85/b9cb85425210605c346a421c08cc1d63.png";

// import { Container, Row, Col } from "react-grid-system";

class App extends Component {
  state = {
    currentScore: 0,
    highscore: 0,
    characters: [
      {
        id: 1,
        link:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhlHtLu0vcAXMQWkmYNfoeDmtEXnrYAhz_tbN6k93_0iPsiUz",
        isClicked: false
      },
      {
        id: 2,
        link:
          "https://static.comicvine.com/uploads/square_small/6/66303/4623030-zim.jpg",
        isClicked: false
      },
      {
        id: 3,
        link:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJbWtFGThFkVLiacwcNl3QM-t4kSDzDwNShklQ2TkAD02XkISTw",
        isClicked: false
      },
      {
        id: 4,
        link:
          "https://vignette.wikia.nocookie.net/zimwiki/images/1/16/Gaz_artwork_full.png/revision/latest?cb=20121202182454",
        isClicked: false
      },
      {
        id: 5,
        link:
          "https://vignette.wikia.nocookie.net/zimwiki/images/c/cf/Invader_Skoodge_full_body.png/revision/latest?cb=20130704195844",
        isClicked: false
      },
      {
        id: 6,
        link:
          "https://fanart.tv/fanart/tv/75545/characterart/invader-zim-53e7e7457ce24.png",
        isClicked: false
      },
      {
        id: 7,
        link:
          "https://fanart.tv/fanart/tv/75545/characterart/invader-zim-53e7e724cab50.png",
        isClicked: false
      },
      {
        id: 8,
        link:
          "https://vignette.wikia.nocookie.net/zimwiki/images/c/ce/Poop_Dawg.png/revision/latest?cb=20110928025937",
        isClicked: false
      },
      {
        id: 9,
        link:
          "http://cdn.collider.com/wp-content/uploads/2018/07/invader-zim-professor-membrane-600x600.jpg",
        isClicked: false
      },
      {
        id: 10,
        link:
          "https://static.tvtropes.org/pmwiki/pub/images/steve_by_amethyst_ocean_dcqadhj.png",
        isClicked: false
      },
      {
        id: 11,
        link:
          "https://vignette.wikia.nocookie.net/zimwiki/images/b/be/ROBOT_DIB.png/revision/latest?cb=20121112025330",
        isClicked: false
      },
      {
        id: 12,
        link:
          "https://i.pinimg.com/originals/b9/cb/85/b9cb85425210605c346a421c08cc1d63.png",
        isClicked: false
      }
    ],
    imageStyle: {
      height: 200,
      width: 200
    },
    bodyStyle: {
      backgroundImage: "url(" + { url } + ")"
    }
  };

  shuffle = array => {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleClick = id => {
    const { characters } = this.state;
    const clickedCharacter = characters.filter(
      character => character.id === id
    );

    if (clickedCharacter[0].isClicked === false) {
      clickedCharacter.map(c => {
        c.isClicked = true;
        return c;
      });

      this.setState({ isClicked: true });
      this.scoreHandler();
      this.characterHandler(false);
    } else {
      this.characterHandler(true);
      this.scoreHandler(true);
    }
  };

  characterHandler = isItemClicked => {
    if (isItemClicked === true) {
      this.setState(state => {
        const characters = state.characters.map(character => {
          character.isClicked = false;
          return character;
        });

        return { [characters]: characters };
      });
      this.setState({ currentScore: 0 });
    }
  };

  scoreHandler = clickedTwice => {
    const { currentScore, highscore } = this.state;

    if (!clickedTwice) {
      this.setState({ currentScore: currentScore + 1 });
    }
    if (!clickedTwice && currentScore > highscore) {
      this.setState({ highscore: currentScore });
    }
    if (clickedTwice) {
      this.setState({ currentScore: 0 });
    }
    if (clickedTwice && currentScore > highscore) {
      this.setState({ highscore: currentScore });
      this.setState({ currentScore: 0 });
    }
  };

  render() {
    const { characters } = this.state;
    let randomCharacters = this.shuffle(characters);

    return (
      <React.Fragment>
        <Navbar
          highscore={this.state.highscore}
          currentScore={this.state.currentScore}
        />

        <Container style={this.state.bodyStyle}>
          <Row>
            {randomCharacters.map(character => {
              return (
                <Col>
                  <Image
                    clickHandler={() => this.handleClick(character.id)}
                    style={this.state.imageStyle}
                    src={character.link}
                    isClicked={character.isClicked}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
