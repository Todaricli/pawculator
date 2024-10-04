import { Link, router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const dog = require('@/assets/images/dog.webp');
const cat = require('@/assets/images/cat.webp');

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pick Your Pet</Text>
      {/* <Link href='/cat'> */}
        <TouchableOpacity 
          style={styles.petButton} 
          onPress={() => router.push({ pathname: '/cat' })}
        >
          <Image 
            source={cat}
            style={styles.image}
          />
        </TouchableOpacity>
      {/* </Link> */}
      {/* <Link href='/dog'> */}
        <TouchableOpacity style={styles.petButton} 
          onPress={() => router.push({ pathname: '/dog' })}>
          <Image 
            source={dog}
            style={styles.image}
          />
        </TouchableOpacity>
      {/* </Link> */}
      <Text style={styles.description}>
        Use this app to calculate how much
        {"\n"}raw food to feed your pet based on
        {"\n"}their weight and activity level
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 30,
  },
  description: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  petButton: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#E9E8E2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    boxShadow: '0 0 8px 8px white inset',
  },
});

export default HomeScreen;
