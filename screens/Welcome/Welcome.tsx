import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo";

import Block from "../../components/Block";

import * as theme from "../../constants/theme";
import Badge from "../../components/Badge";
import Card from "../../components/Card";
import Typography from "../../components/Typography";

type Params = {};

type ScreenProps = {};

const styles = StyleSheet.create({
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4
  },
  moreIcon: {
    width: 16,
    height: 17,
    position: "absolute",
    right: theme.sizes.base,
    top: theme.sizes.base
  },
  // horizontal line
  hLine: {
    marginVertical: theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base * 2,
    height: 1
  },
  // vertical line
  vLine: {
    marginVertical: theme.sizes.base / 2,
    width: 1
  }
});

const Welcome: NavigationStackScreenComponent<Params, ScreenProps> = ({
  navigation
}) => {
  const renderMonthly = () => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Rewards")}
    >
      <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/Icon/More.png")}
          style={styles.moreIcon}
        />
        <Block>
          <Block center>
            <Typography h1 primary spacing={1.7}>
              $11.71
            </Typography>
            <Typography spacing={0.7}>Total Monthly Rewards</Typography>
          </Block>
          <Block color="gray3" style={styles.hLine} />
          <Block row>
            <Block center>
              <Typography
                size={20}
                spacing={0.6}
                primary
                style={{ marginBottom: 6 }}
              >
                8.1
              </Typography>
              <Typography body spacing={0.7}>
                Driving
              </Typography>
              <Typography body spacing={0.7}>
                Score
              </Typography>
            </Block>
            <Block flex={false} color="gray3" style={styles.vLine} />
            <Block center>
              <Typography
                size={20}
                spacing={0.6}
                primary
                style={{ marginBottom: 6 }}
              >
                37
              </Typography>
              <Typography body spacing={0.7}>
                Driver's
              </Typography>
              <Typography body spacing={0.7}>
                Level
              </Typography>
            </Block>
          </Block>
        </Block>
      </Card>
    </TouchableOpacity>
  );

  return (
    <>
      <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
        {renderMonthly()}
      </ScrollView>
    </>
  );
};

Welcome.navigationOptions = {
  headerTitle: <Text style={theme.fonts.header}>Welcome</Text>,
  headerTitleContainerStyle: {
    alignItems: "center",
    paddingLeft: theme.sizes.padding
  },
  headerRight: (
    <TouchableOpacity style={{ alignSelf: "center" }}>
      <Block flex={false}>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/Icon/Menu.png")}
          style={{ width: 20, height: 24 }}
        />
        <Badge
          size={13}
          color={theme.colors.accent}
          style={{ position: "absolute", top: -4, right: -4 }}
        />
      </Block>
    </TouchableOpacity>
  ),
  headerRightContainerStyle: {
    alignItems: "center",
    marginRight: theme.sizes.padding
  }
};

export default Welcome;
