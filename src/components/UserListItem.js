import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { scaleH, scaleW } from 'utils/scale';
import { Colors } from 'config';
import Avatar from 'components/Avatar';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleW(15),
    paddingVertical: scaleH(13),
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    width: scaleH(50),
    height: scaleH(50),
    borderRadius: scaleH(30),
  },
  userContent: {
    marginLeft: scaleW(10),
  },
  name: {
    fontSize: scaleH(20),
    lineHeight: scaleH(26),
    fontWeight: '600',
    color: Colors.pink,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: scaleH(4),
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: scaleH(15),
    color: Colors.grey,
    marginLeft: scaleW(5),
  },
});

const UserListItem = ({ data, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.userContainer}>
        <Avatar size="medium" image={data.profile_image} />
        <View style={styles.userContent}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Icon name="location-on" color={Colors.grey} size={scaleH(15)} />
              <Text style={styles.infoText}>{data.location || 'Unknown'}</Text>
            </View>
            <View style={[styles.infoItem, { marginLeft: scaleW(15) }]}>
              <Icon name="thumb-up" color={Colors.grey} size={scaleH(15)} />
              <Text style={styles.infoText}>{data.total_likes}</Text>
            </View>
          </View>
        </View>
      </View>
      <Icon name="keyboard-arrow-right" color={Colors.grey} size={scaleH(30)} />
    </TouchableOpacity>
  );
};

UserListItem.defaultProps = {
  data: {},
  onPress: () => {},
};

UserListItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  onPress: PropTypes.func,
};

export default UserListItem;
