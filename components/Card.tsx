import React, { Component, ReactNode } from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import * as theme from "../constants/theme";

interface CardProps {
  style?: { [key: string]: string[] | number[] | string | number };
  color?: string;
  children: ReactNode;
  shadow?: boolean;
}

const Card: React.FC<CardProps> = ({
  color,
  shadow,
  style,
  children,
  ...props
}) => {
  const cardStyles = [styles.card, style, shadow && styles.shadow];
  return (
    <Block color={color || theme.colors.white} style={cardStyles} {...props}>
      {children}
    </Block>
  );
};

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.border,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOpacity: 0.11,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 13
  }
});

export default Card;
