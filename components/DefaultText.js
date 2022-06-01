import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = ({ children, style, ...props }) => {
  return (
    <Text style={{ ...styles.text, ...style }} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({ text: { fontFamily: 'Poppins-SemiBold', fontSize: 18 } });

export default DefaultText;
