import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import { Link, router, useLocalSearchParams } from 'expo-router';
import alert from '../components/Alert';
import styles from '../components/PetStyles';

const Cat: React.FC = () => {
  const { 
    activityLevel: initialActivityLevel, 
    weight: initialWeight, 
    weightUnit: initialWeightUnit 
  } = useLocalSearchParams();
  const [activityLevel, setActivityLevel] = useState<string>(initialActivityLevel?.toString() || '3');
  const [weight, setWeight] = useState<string>(initialWeight?.toString() ?? '');
  const [weightUnit, setWeightUnit] = useState<'pounds' | 'kilograms'>(initialWeightUnit === 'pounds' ? 'pounds' : 'kilograms');
  const weightLimits = {
    min: weightUnit === 'pounds' ? Math.floor(1 * 2.204623) : 1,
    max: weightUnit === 'pounds' ? Math.ceil(8 * 2.204623) : 8,
  };

  const handleBack = () => {
    router.push({ pathname: '/' });
  }

  const handleNext = () => {
    if (!weight || isNaN(Number(weight)) || parseFloat(weight) <= 0) {
      alert('Invalid Input', 'Please enter a valid weight.');
      return;
    }

    if (parseFloat(weight) < weightLimits.min || parseFloat(weight) > weightLimits.max) {
      const unit = weightUnit === 'pounds' ? 'lbs' : 'kg';
      alert('Invalid weight', `Weight must be between ${weightLimits.min}${unit} and ${weightLimits.max}${unit}`);
      return;
    }

    router.push({ pathname: '/result', params: { petType: 'cat', activityLevel, weight, weightUnit }});
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pick Your Cat's Activity Level:</Text>
      
      <View style={styles.radioContainer}>
        <RadioButton.Group onValueChange={newValue => setActivityLevel(newValue)} value={activityLevel}>
          <View style={styles.radioOption}>
            <RadioButton value="3" />
            <Text style={styles.radioText} onPress={() => setActivityLevel('3')}>3% - Maintenance</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="5" />
            <Text style={styles.radioText} onPress={() => setActivityLevel('5')}>5% - Active</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="10" />
            <Text style={styles.radioText} onPress={() => setActivityLevel('10')}>5-10% - Growing Kitten</Text>
          </View>
        </RadioButton.Group>
      </View>

      <Text style={styles.title}>Enter Your Pet's Weight:</Text>

      <View style={styles.inputContainer}>
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
      </View>

      <View style={styles.buttonGroup}>
        <Button
          mode="contained"
          style={[
        styles.unitButton,
        weightUnit === 'pounds' ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => setWeightUnit('pounds')}
        >
          <Text style={weightUnit === 'pounds' ? styles.selectedButtonText : styles.unselectedButtonText}>
        Pounds
          </Text>
        </Button>
        <Button
          mode="contained"
          style={[
        styles.unitButton,
        weightUnit === 'kilograms' ? styles.selectedButton : styles.unselectedButton,
          ]}
          onPress={() => setWeightUnit('kilograms')}
        >
          <Text style={weightUnit === 'kilograms' ? styles.selectedButtonText : styles.unselectedButtonText}>
        Kilograms
          </Text>
        </Button>
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
          disabled={!weight?.length || weight.length === 0}
        >
          <span style={styles.buttonText}>Next</span>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Cat;
