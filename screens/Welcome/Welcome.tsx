import React from "react";
import {
  Text,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Dimensions
} from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import rgba from "hex-to-rgba";

import Block from "../../components/Block";

import { styles as blockStyles } from "../../components/Block";
import { styles as cardStyles } from "../../components/Card";

import * as theme from "../../constants/theme";
import * as mocks from "../../constants/mocks";
import Badge from "../../components/Badge";
import Card from "../../components/Card";
import Typography from "../../components/Typography";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

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
  },
  awards: {
    padding: theme.sizes.base,
    marginBottom: theme.sizes.padding
  },
  startTrip: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 144 / 1.2,
    justifyContent: "flex-end",
    alignItems: "center"
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
  const renderAwards = () => (
    <LinearGradient
      end={{ x: 1, y: 0 }}
      style={[blockStyles.row, cardStyles.card, styles.awards]}
      colors={["#FF988A", theme.colors.accent]}
    >
      <Block middle flex={0.4}>
        <Badge color={rgba(theme.colors.white, "0.2")} size={74}>
          <Badge color={rgba(theme.colors.white, "0.2")} size={52}>
            <FontAwesome name="trophy" color="white" size={theme.sizes.h2} />
          </Badge>
        </Badge>
      </Block>
      <Block middle>
        <Typography size={theme.sizes.base} spacing={0.4} medium white>
          Wohoo!
        </Typography>
        <Typography size={theme.sizes.base} spacing={0.4} medium white>
          Safe Driver Trophy!
        </Typography>
      </Block>
    </LinearGradient>
  );
  const renderTrips = () => {
    const renderTrip = trip => (
      <Card shadow key={`trip-${trip.id}`}>
        <Block row space="between" style={{ marginBottom: theme.sizes.base }}>
          <Typography spacing={0.5} caption>
            {trip.date}
          </Typography>
          <Typography spacing={0.5} caption medium primary>
            {trip.score}
          </Typography>
          <Typography spacing={0.5} caption>
            {trip.distance}
          </Typography>
        </Block>
        <Block row center>
          <Badge
            color={rgba(theme.colors.accent, "0.2")}
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color={theme.colors.accent} size={8} />
          </Badge>
          <Typography spacing={0.5} color="gray">
            {trip.from}
          </Typography>
        </Block>
        <Block row center style={{ paddingVertical: 4 }}>
          <Badge color="gray2" size={4} style={{ marginLeft: 4.5 }} />
        </Block>
        <Block row center>
          <Badge
            color={rgba(theme.colors.primary, "0.2")}
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color={theme.colors.primary} size={8} />
          </Badge>
          <Typography spacing={0.5} color="gray">
            {trip.to}
          </Typography>
        </Block>
      </Card>
    );
    return (
      <React.Fragment>
        <Block style={{ marginBottom: theme.sizes.base }}>
          <Typography spacing={0.4} transform="uppercase">
            Recent Trips
          </Typography>
        </Block>
        {mocks.trips.map(trip => renderTrip(trip))}
      </React.Fragment>
    );
  };
  const renderTripButton = () => (
    <Block block center middle style={styles.startTrip}>
      <Badge color={rgba(theme.colors.primary, "0.1")} size={144}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Trip")}
        >
          <Badge color={theme.colors.primary} size={62}>
            <FontAwesome name="automobile" size={62 / 2.5} color="white" />
          </Badge>
        </TouchableOpacity>
      </Badge>
    </Block>
  );
  return (
    <>
      <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
        {renderMonthly()}
        {renderAwards()}
        {renderTrips()}
        {renderTripButton()}
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
