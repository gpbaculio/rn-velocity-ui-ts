import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import Navigation from "./navigation";
import Block from "./components/Block";

type AppProps = {
  skipLoadingScreen: boolean;
};

const App: React.FC<AppProps> = ({ skipLoadingScreen }) => {
  // add fonts support
  const [isLoadingComplete, setIsLoadingComplete] = React.useState(false);

  const handleResourcesAsync = async () => {
    await Promise.all([
      Font.loadAsync({
        "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
        "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
        "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
        "Rubik-Italic": require("./assets/fonts/Rubik-Italic.ttf"),
        "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
        "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf")
      })
    ]);
  };

  if (!isLoadingComplete && !skipLoadingScreen)
    return (
      <AppLoading
        startAsync={handleResourcesAsync}
        onError={error => console.warn(error)}
        onFinish={() => setIsLoadingComplete(true)}
      />
    );

  return (
    <Block>
      <Navigation />
    </Block>
  );
};

export default App;
