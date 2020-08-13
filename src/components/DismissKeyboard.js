import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
    style={styles.container}
  >
    {children}
  </TouchableWithoutFeedback>
);

DismissKeyboard.defaultProps = {
  children: null,
};

DismissKeyboard.propTypes = {
  children: PropTypes.node,
};

export default DismissKeyboard;
