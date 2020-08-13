import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { Colors } from 'config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SafeAreaContainer = ({ children, style }) => {
  return (
    <SafeAreaView
      style={[styles.container, style]}
      edges={['right', 'top', 'left']}
    >
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      {children}
    </SafeAreaView>
  );
};

SafeAreaContainer.defaultProps = {
  children: null,
  style: null,
};

SafeAreaContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.any),
};

export default SafeAreaContainer;
