import { StyleSheet, Text, View, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from "../constants/colors";
import Title from "../components/Title";
import Header from "../components/Header";
import NavButton from "../components/NavButton";

function GameOverScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const playerScore = 21;
  const computerScore = 21;

  let titleText = <Title>It's a Tie</Title>;

  if (
    (playerScore <= 21 && playerScore > computerScore) ||
    (playerScore <= 21 && computerScore > 21)
  ) {
    titleText = <Title>Player Wins!</Title>;
  }
  if (
    (computerScore <= 21 && computerScore > playerScore) ||
    (computerScore <= 21 && playerScore > 21)
  ) {
    titleText = <Title>Computer Wins!</Title>;
  }

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>{titleText}</View>

      <View style={styles.scoreContainer}>
        <Header>Computer Score: </Header>
        <Text style={styles.scoreText}>{computerScore}</Text>
      </View>

      <View style={styles.scoreContainer}>
        <Header>Player Score: </Header>
        <Text style={styles.scoreText}>{playerScore}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Play Again?</NavButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 50,
    color: Colors.primary500,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
