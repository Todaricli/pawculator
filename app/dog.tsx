import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import { Link, router, useLocalSearchParams } from 'expo-router';

const Dog: React.FC = () => {
  const { 
    activityLevel: initialActivityLevel, 
    weight: initialWeight, 
    weightUnit: initialWeightUnit 
  } = useLocalSearchParams();
  const [activityLevel, setActivityLevel] = useState<string>(initialActivityLevel?.toString() || '2');
  const [weight, setWeight] = useState<string>(initialWeight?.toString());
  const [weightUnit, setWeightUnit] = useState<'pounds' | 'kilograms'>(initialWeightUnit === 'pounds' ? 'pounds' : 'kilograms');

  const handleBack = () => {
    router.push({ pathname: '/' });
  }

  const handleNext = () => {
    if (!weight || isNaN(Number(weight)) || parseFloat(weight) <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid weight.');
      return;
    }

    router.push({ pathname: '/result', params: { petType: 'dog', activityLevel, weight, weightUnit }});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Your Dog's Activity Level:</Text>
      
      <View style={styles.radioContainer}>
        <RadioButton.Group onValueChange={newValue => setActivityLevel(newValue)} value={activityLevel}>
          <View style={styles.radioOption}>
            <RadioButton value="2" />
            <Text style={styles.radioText} onPress={() => setActivityLevel('2')}>2% - Maintenance</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="3" />
            <Text style={styles.radioText} onPress={() => setActivityLevel('3')}>3% - Active</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="5" />
            <Text style={styles.radioText} onPress={() => setActivityLevel('5')}>5% - Growing Puppy</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="10" />
            <Text style={styles.radioText} onPress={() => setActivityLevel('10')}>10% - Growth Spurt</Text>
          </View>
        </RadioButton.Group>
      </View>

      <Text style={styles.title}>Enter Your Pet's Weight:</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => {
          const numericValue = text.replace(/[^0-9]/g, '');
          setWeight(numericValue);
        }}
        placeholder="Enter weight"
      />

      <View style={styles.radioContainer}>
        <RadioButton.Group onValueChange={newValue => setWeightUnit(newValue as 'pounds' | 'kilograms')} value={weightUnit}>
          <View style={styles.radioOption}>
            <RadioButton value="pounds" />
            <Text style={styles.radioText} onPress={() => setWeightUnit('pounds')}>Pounds</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="kilograms" />
            <Text style={styles.radioText} onPress={() => setWeightUnit('kilograms')}>Kilograms</Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.buttonContainer}>
        <Link href='/'>
          <Button 
            mode="contained"
            style={[styles.button, styles.backButton]} 
            color="#d3d3d3"
            onPress={handleBack}
          >
            <span style={styles.buttonText}>Back</span>
          </Button>
        </Link>
        <Button 
          mode="contained"
          style={[styles.button, styles.nextButton]} 
          color="rgba(0, 134, 214, 0.95)"
          onPress={handleNext}
        >
          <span style={styles.buttonText}>Next</span>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  radioContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioText: {
    fontSize: 18,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  button: {
    flex: 0.45,
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
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

export default Dog;
