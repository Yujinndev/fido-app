import React from 'react';
import { FlatList, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }) => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={item.categoryId === selectedCategory ? styles.selected : null}
      onPress={() => setSelectedCategory(item.categoryId)}
    >
      <View style={styles.categories}>
        <Image source={item.image} style={styles.categoryPhoto} resizeMode="contain" />
        <Text style={item.id === selectedCategory ? styles.selected : null}>{item.name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={renderCategory}
      keyExtractor={item => item.categoryId.toString()}
    />
  );
};

const styles = StyleSheet.create({
    categories: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
    },
});

export default CategoryList;

