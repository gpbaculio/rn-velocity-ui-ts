import React, { Component, ReactNode } from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import Block from "./Block";
import * as theme from "../constants/theme";

interface BadgeProps {
  children?: JSX.Element[] | ReactNode;
  style?: { [key: string]: string[] | number[] | string | number };
  size: number;
  color: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  style,
  size,
  color,
  ...props
}) => {
  const badgeStyles = StyleSheet.flatten([
    styles.badge,
    size && {
      height: size,
      width: size,
      borderRadius: size
    },
    style
  ]);

  return (
    <Block
      flex={false}
      middle
      center
      color={color}
      style={badgeStyles}
      {...props}
    >
      {children}
    </Block>
  );
};

export const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.border
  }
});

export default Badge;
