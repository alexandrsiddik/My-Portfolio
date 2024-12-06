import React from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import LanguageItem from './components/LanguageItem';

const langs = [
  { id: '1', lang: 'JavaScript', experience: 5 },
]

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={langs}
        renderItem={({ item }) => <LanguageItem item={item} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 22,
  },
})

export default App