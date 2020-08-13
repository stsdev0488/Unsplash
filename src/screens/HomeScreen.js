import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DelayInput from 'react-native-debounce-input';
import Spinner from 'react-native-loading-spinner-overlay';
import { showMessage } from 'react-native-flash-message';
import SafeAreaContainer from 'components/SafeAreaContainer';
import DismissKeyboard from 'components/DismissKeyboard';
import EmptyListComponent from 'components/EmptyListComponent';
import UserListItem from 'components/UserListItem';
import { Colors } from 'config';
import { SearchActions } from 'reduxs/actions';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pink,
  },
  searchInput: {
    margin: scaleW(10),
    height: scaleH(40),
    borderColor: 'gray',
    borderRadius: scaleH(20),
    paddingHorizontal: scaleW(10),
    backgroundColor: Colors.white,
  },
  userList: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.search);

  const [filter, setFilter] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = () => {
    dispatch(SearchActions.search({ filter, pageNumber }));
  };

  const handleChangeFilter = (text) => {
    setFilter(text);
    setPageNumber(1);
    dispatch(SearchActions.search({ filter: text, pageNumber: 1 }));
  };

  const handleEndReached = () => {
    setPageNumber(pageNumber + 1);
    dispatch(SearchActions.search({ filter, pageNumber: pageNumber + 1 }));
  };

  useEffect(() => {
    if (error && !loading) {
      showMessage({
        type: 'danger',
        message: error,
      });
    }
  }, [error, loading]);

  return (
    <SafeAreaContainer style={styles.container}>
      <Spinner visible={loading || false} />
      <DismissKeyboard>
        <View style={{ flex: 1 }}>
          <DelayInput
            minLength={1}
            value={filter}
            onChangeText={handleChangeFilter}
            onSubmitEditing={handleSearch}
            style={styles.searchInput}
            placeholder="Search"
            returnKeyType="search"
          />
          <FlatList
            contentContainerStyle={{ paddingVertical: scaleH(10) }}
            style={styles.userList}
            data={data}
            ListEmptyComponent={<EmptyListComponent text="No users" />}
            renderItem={({ item, index }) => (
              <UserListItem
                data={item}
                onPress={() =>
                  navigation.navigate('UserDetail', { data: item })
                }
              />
            )}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.4}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </DismissKeyboard>
    </SafeAreaContainer>
  );
};

export default HomeScreen;
