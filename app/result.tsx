import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { Link, router } from 'expo-router';

type ParamList = {
  Result: {
    petType: string;
    activityLevel: string;
    weight: number;
    weightUnit: string;
  };
};

const ResultScreen: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, 'Result'>>();
  const { petType, activityLevel, weight, weightUnit } = route.params;
  
  const handleDone = () => {
    router.push({ pathname: '/' });
  }

  const handleBack = () => {
    router.push({ pathname: petType === 'dog' ? '/dog' : '/cat', params: { activityLevel, weight, weightUnit }});
  };

  // Calculate food recommendation
  const activityPercentage = parseFloat(activityLevel) / 100;
  const modifier = weightUnit === 'pounds' ? 16 : 1000;
  const foodUnit = weightUnit === 'pounds' ? 'oz' : 'g';

  const kittenFoodRange = () => {
    return `${(weight * 0.05 * modifier).toFixed(0)} - ${(weight * 0.1 * modifier).toFixed(0)}`;
  };

  const foodRecommendation = () => {
    if (petType === 'cat' && activityPercentage === 0.1) {
      return kittenFoodRange();
    }

    return `${(weight * activityPercentage * modifier).toFixed(0)}`;
  }

  return (
    <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>We Recommend Feeding your {petType === 'dog' ? 'Dog' : 'Cat'}:</Text>
        <Text style={styles.foodAmount}>{foodRecommendation()}{foodUnit}</Text>
        <Text style={styles.subTitle}>Raw Food Per Day</Text>
        
        <Image 
          source={{ uri: `/assets/images/${petType.toLowerCase()}.webp` }} // Replace with the actual image URL
          style={styles.image}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          mode="contained"
          style={[styles.button, styles.backButton]} 
          color="#d3d3d3"
          onPress={handleBack}
        >
          <span style={styles.buttonText}>Back</span>
        </Button>
        <Link href='/'>
          <Button 
            mode="contained"
            style={[styles.button, styles.nextButton]} 
            color="rgba(0, 134, 214, 0.95)"
            onPress={handleDone}
          >
            <span style={styles.buttonText}>Start Over</span>
          </Button>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  foodAmount: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    paddingBottom: 30,
  },
  button: {
    flex: 0.45,
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    minWidth: 'fit-content',
  },
  backButton: {
    backgroundColor: '#d3d3d3', // Light grey
  },
  nextButton: {
    backgroundColor: 'rgba(0, 134, 214, 0.95)', // Blue color
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default ResultScreen;
