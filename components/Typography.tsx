// just copy this code from the driving repo :)
import React, { Component } from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

import * as theme from "../constants/theme";

interface TypographyProps {
  [key: string]: TextStyle | string | boolean | number;
  children: string;
}
const Typography: React.FC<TypographyProps> = ({
  h1,
  h2,
  h3,
  title,
  body,
  caption,
  small,
  size,
  transform,
  // styling
  regular,
  bold,
  semibold,
  medium,
  weight,
  light,
  center,
  right,
  spacing, // letter-spacing
  height, // line-height
  // colors
  color,
  accent,
  primary,
  secondary,
  tertiary,
  black,
  white,
  gray,
  gray2,
  style,
  children,
  ...props
}) => {
  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,
    small && styles.small,
    size && { fontSize: size },
    transform && { textTransform: transform },
    height && { lineHeight: height },
    spacing && { letterSpacing: spacing },
    weight && { fontWeight: weight },
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && styles[color as string],
    color && !styles[color as string] && { color },
    // color shortcuts
    accent && styles.accent,
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    gray2 && styles.gray2,
    style // rewrite predefined styles
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

export const styles = StyleSheet.create({
  // default style
  text: {
    fontFamily: "Rubik-Regular",
    fontSize: theme.sizes.font,
    color: theme.colors.black
  },
  // variations
  regular: {
    fontWeight: "normal",
    fontFamily: "Rubik-Regular"
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "Rubik-Bold"
  },
  semibold: {
    fontWeight: "500",
    fontFamily: "Rubik-SemiBold"
  },
  medium: {
    fontWeight: "500",
    fontFamily: "Rubik-Medium"
  },
  light: {
    fontWeight: "200",
    fontFamily: "Rubik-Light"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  accent: { color: theme.colors.accent },
  primary: { color: theme.colors.primary },
  secondary: { color: theme.colors.secondary },
  tertiary: { color: theme.colors.tertiary },
  black: { color: theme.colors.black },
  white: { color: theme.colors.white },
  gray: { color: theme.colors.gray },
  gray2: { color: theme.colors.gray2 },
  // fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  title: theme.fonts.title,
  body: theme.fonts.body,
  caption: theme.fonts.caption,
  small: theme.fonts.small
});

export default Typography;
