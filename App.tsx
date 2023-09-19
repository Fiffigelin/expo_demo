import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, StyleSheet } from "react-native";

export default function App() {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    animatePulsate();
  }, []);

  const animatePulsate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  return (
    <>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]} //blå
        // colors={["#efc275", "#E9AE49", "#DB941A"]} //gul
        style={styles.background}
      >
        <Animated.View
          style={[styles.imgContainer, { transform: [{ scale: scaleValue }] }]}
        >
          <Image
            source={require(`../expo_demo/assets/pngwing.png`)}
            style={styles.img}
          />
        </Animated.View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    borderRadius: 200,
    backgroundColor: "#4365ac", //blå
    // backgroundColor: "#E49C22", //gul
  },
  img: {
    justifyContent: "center",
    height: 200,
    width: 200,
    transform: [{ scaleX: -1 }],
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
