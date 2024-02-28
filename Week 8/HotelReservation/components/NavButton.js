import {
    Pressable,
    StyleSheet,
    View,
    Text,
    useWindowDimensions,
  } from "react-native";
  import Colors from "../constants/colors";
  
  function NavButton(props) {
    const { width, height } = useWindowDimensions();
  
    return (
      <Pressable
        onPress={props.onPress}
        // By providing styling and checking for pressed you can set temporary styles
        // that will only be active while pressed. This will take effect on iOS and Android
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, { fontSize: width * 0.07 }]}>
              {props.children}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }
  
  export default NavButton;
  
  const styles = StyleSheet.create({
    buttonContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors.primary500,
      borderRadius: 300,
      width: 1000,
      maxWidth: "70%",
      marginHorizontal: 10,
      marginVertical: 10,
    },
    pressedItem: {
      opacity: 0.5,
    },
    text: {
      padding: 8,
      fontFamily: "hotel",
      textAlign: "center",
      color: Colors.primary300,
    },
  });
  