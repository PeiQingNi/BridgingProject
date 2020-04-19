import React from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({id, title, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        {backgroundColor: selected ? '#6e3b6e' : '#f9c2ff'},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

function ItemSeparator() {
  return <View style={styles.separator} />;
}

function ListEmpty() {
  return (
    <View style={styles.empty}>
      <Text>暂无数据</Text>
    </View>
  );
}

function ListFooter() {
  return <Text>footer</Text>;
}

function ListHeader() {
  return <Text>header</Text>;
}

export default function FlatListComponent() {
  const [selected, setSelected] = React.useState(new Map());
  const [isRefresh, setIsRefrese] = React.useState(false);

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  React.useEffect(() => {
    console.log(selected);
  }, [selected]);

  const flatList = React.useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatList}
        data={DATA}
        renderItem={({item}) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={ListEmpty}
        ListFooterComponent={ListFooter}
        ListFooterComponentStyle={{
          alignItems: 'center',
        }}
        ListHeaderComponent={ListHeader}
        ListHeaderComponentStyle={{
          alignItems: 'center',
        }}
        onRefresh={() => {
          setIsRefrese(true);
          setTimeout(() => {
            setIsRefrese(false);
          }, 2000);
        }}
        refreshing={isRefresh}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#000000',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff00ff',
  },
});
