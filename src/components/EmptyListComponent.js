import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'config';
import { scaleH } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: scaleH(16),
    color: Colors.grey,
  },
});

const EmptyListComponent = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

EmptyListComponent.defaultProps = {
  text: '',
};

EmptyListComponent.propTypes = {
  text: PropTypes.string,
};

export default EmptyListComponent;
