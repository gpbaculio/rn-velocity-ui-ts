// just copy this code from the driving repo :)
import React, { Component, ReactNode } from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  ShadowStyleIOS,
  TextStyle
} from "react-native";

import * as theme from "../constants/theme";

export interface StylesProp {
  block: ViewStyle;
  row: ViewStyle;
  column: ViewStyle;
  card: ViewStyle;
  center: ViewStyle;
  middle: ViewStyle;
  left: ViewStyle;
  right: ViewStyle;
  top: ViewStyle;
  bottom: ViewStyle;
  shadow: ShadowStyleIOS;
  accent: ViewStyle;
  primary: ViewStyle;
  secondary: ViewStyle;
  tertiary: ViewStyle;
  black: ViewStyle;
  white: ViewStyle;
  gray: ViewStyle;
  gray2: ViewStyle;
  gray3: ViewStyle;
  gray4: ViewStyle;
}

export const styles = StyleSheet.create<StylesProp>({
  block: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  card: {
    borderRadius: theme.sizes.border
  },
  center: {
    alignItems: "center"
  },
  middle: {
    justifyContent: "center"
  },
  left: {
    justifyContent: "flex-start"
  },
  right: {
    justifyContent: "flex-end"
  },
  top: {
    justifyContent: "flex-start"
  },
  bottom: {
    justifyContent: "flex-end"
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13
  },
  accent: { backgroundColor: theme.colors.accent },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  black: { backgroundColor: theme.colors.black },
  white: { backgroundColor: theme.colors.white },
  gray: { backgroundColor: theme.colors.gray },
  gray2: { backgroundColor: theme.colors.gray2 },
  gray3: { backgroundColor: theme.colors.gray3 },
  gray4: { backgroundColor: theme.colors.gray4 }
});

type BlockProps = {
  [key: string]: boolean | string | TextStyle | ReactNode | ViewStyle;
};

const Block: React.FC<BlockProps> = ({
  flex,
  row,
  column,
  center,
  middle,
  left,
  right,
  top,
  bottom,
  card,
  shadow,
  color,
  space,
  style,
  children,
  ...props
}) => {
  const blockStyles = [
    styles.block,
    flex && { flex },
    flex === false && { flex: 0 }, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    card && styles.card,
    shadow && styles.shadow,
    space && { justifyContent: `space-${space}` },
    color && styles[color as string], // predefined styles colors for backgroundColor
    color && !styles[color as keyof StylesProp] && { backgroundColor: color }, // custom backgroundColor
    style // rewrite predefined styles
  ];

  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};

export default Block;
