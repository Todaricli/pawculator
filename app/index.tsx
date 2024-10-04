import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Your Pet</Text>
      <Link href='/cat'>
        <TouchableOpacity style={styles.petButton}>
          <Image 
            source={{ uri: '/assets/images/cat.webp' }}
            style={styles.image}
          />
        </TouchableOpacity>
      </Link>
      <Link href='/dog'>
        <TouchableOpacity style={styles.petButton}>
          <Image 
            source={{ uri: '/assets/images/dog.webp' }}
            style={styles.image}
          />
        </TouchableOpacity>
      </Link>
      <Text style={styles.description}>
        Use this app to calculate how much 
        ~{"\n"}raw food to feed your pet based on their
        ~{"\n"}weight and activity level
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
