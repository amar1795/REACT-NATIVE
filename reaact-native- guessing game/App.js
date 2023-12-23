function startNewGameHandler() {
  setUserNumber(null);
  setGuessRounds(0);
}

let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

if (userNumber) {
  screen = (
    <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  );
    

if (gameIsOver && userNumber) {
  screen = (
    <GameOverScreen
      userNumber={userNumber}
      roundsNumber={guessRounds}
      onStartNewGame={startNewGameHandler}
    />
  );
}

return (
  <LinearGradient
    colors={[Colors.primary700, Colors.accent500]}
    style={styles.rootScreen}
  >
    <ImageBackground
      source={require('./assets/images/background.png')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </ImageBackground>
  </LinearGradient>
);
}

const styles = StyleSheet.create({
rootScreen: {
  flex: 1,
},
backgroundImage: {
  opacity: 0.15,
},
});

