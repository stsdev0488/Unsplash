import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { scaleH } from 'utils/scale';

const Avatar = ({ image, size }) => {
  let avatarStyle = {};
  switch (size) {
    case 'small':
      avatarStyle = {
        width: scaleH(35),
        height: scaleH(35),
        borderRadius: scaleH(35),
        resizeMode: 'cover',
      };
      return <Image style={avatarStyle} source={{ uri: image.small }} />;
    case 'medium':
      avatarStyle = {
        width: scaleH(55),
        height: scaleH(55),
        borderRadius: scaleH(55),
        resizeMode: 'cover',
      };
      return <Image style={avatarStyle} source={{ uri: image.medium }} />;
    case 'large':
      avatarStyle = {
        width: scaleH(95),
        height: scaleH(95),
        borderRadius: scaleH(95),
        resizeMode: 'cover',
      };
      return <Image style={avatarStyle} source={{ uri: image.large }} />;
    case 'xlarge':
      avatarStyle = {
        width: scaleH(150),
        height: scaleH(150),
        borderRadius: scaleH(150),
        resizeMode: 'cover',
      };
      return <Image style={avatarStyle} source={{ uri: image.large }} />;
    default:
      avatarStyle = {
        width: scaleH(55),
        height: scaleH(55),
        borderRadius: scaleH(55),
        resizeMode: 'cover',
      };
      return <Image style={avatarStyle} source={{ uri: image.medium }} />;
  }
};

Avatar.defaultProps = {
  image: {},
  size: 'medium',
};

Avatar.propTypes = {
  image: PropTypes.objectOf(PropTypes.any),
  size: PropTypes.string,
};

export default Avatar;
