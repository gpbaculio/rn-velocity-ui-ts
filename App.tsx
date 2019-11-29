import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import * as Icon from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import AppNavigator from "./navigation/AppNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

interface AppProps {
  skipLoadingScreen: boolean;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  const [isLoadingComplete, setIsLoadingComplete] = React.useState(false);
  const loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([require("./assets/images/Base/Logo.png")]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // ...Icon.Ionicons.font,
        "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
        "Rubik-BlackItalic": require("./assets/fonts/Rubik-BlackItalic.ttf"),
        "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
        "Rubik-BoldItalic": require("./assets/fonts/Rubik-BoldItalic.ttf"),
        "Rubik-Italic": require("./assets/fonts/Rubik-Italic.ttf"),
        "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
        "Rubik-LightItalic": require("./assets/fonts/Rubik-LightItalic.ttf"),
        "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
        "Rubik-MediumItalic": require("./assets/fonts/Rubik-MediumItalic.ttf"),
        "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf")
      })
    ]);
  };
  const handleFinishLoading = () => setIsLoadingComplete(true);
  const handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
};

export default App;
