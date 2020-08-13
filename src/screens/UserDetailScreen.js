import React, { useLayoutEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import ImageView from 'react-native-image-viewing';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SafeAreaContainer from 'components/SafeAreaContainer';
import Avatar from 'components/Avatar';
import EmptyListComponent from 'components/EmptyListComponent';
import { Colors } from 'config';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: scaleH(15),
  },
  name: {
    fontSize: scaleH(20),
    lineHeight: scaleH(26),
    fontWeight: '600',
    color: Colors.pink,
    marginTop: scaleH(5),
    textAlign: 'center',
  },
  bio: {
    fontSize: scaleH(15),
    lineHeight: scaleH(20),
    color: Colors.grey,
    marginTop: scaleH(4),
    textAlign: 'center',
    paddingHorizontal: scaleW(50),
  },
  imageItem: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  photoGrid: {
    flex: 1,
  },
});

const UserDetailScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const [imageViewVisible, setImageViewVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const renderImageItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setImageIndex(index);
          setImageViewVisible(true);
        }}
      >
        <Image source={{ uri: item }} style={styles.imageItem} />
      </TouchableOpacity>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="keyboard-arrow-left"
            color={Colors.white}
            size={scaleH(35)}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: Colors.pink,
      },
    });
  }, [navigation]);

  return (
    <SafeAreaContainer style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Avatar image={data.profile_image} size="xlarge" />
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.bio}>{data.bio}</Text>
      </View>
      <FlatGrid
        contentContainerStyle={{ paddingVertical: scaleH(10) }}
        style={styles.photoGrid}
        itemDimension={180}
        ListEmptyComponent={<EmptyListComponent text="No photos" />}
        data={data.photos.map((item) => item.urls.thumb)}
        renderItem={renderImageItem}
      />
      <ImageView
        images={data.photos.map((item) => ({
          uri: item.urls.full,
        }))}
        imageIndex={imageIndex}
        visible={imageViewVisible}
        onRequestClose={() => setImageViewVisible(false)}
      />
    </SafeAreaContainer>
  );
};

export default UserDetailScreen;
