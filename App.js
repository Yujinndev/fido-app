import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

/* API FETCHING */
import axios from 'axios';

/* COMPONENTS */
import AppBar from './components/appbar';
import CategoryList from './components/categoryList';

export default function App() {
  const [users, setUsers] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const getCategory = await axios.get('http://192.168.101.158:3000/categories');
        setCategory(getCategory.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const getUsers = await axios.get('http://192.168.101.158:3000/users');
        setUsers(getUsers.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchCategories();
    fetchUsers();
  }, []);

  return (
    <SafeAreaView styles={styles.container}>
      <AppBar />
      <CategoryList
        categories={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <View>
        {users.map(item => (
          <Text key={item.userId}>{item.lastname}, {item.firstname}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
