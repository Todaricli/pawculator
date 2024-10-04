import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import { Link, router, useLocalSearchParams } from 'expo-router';
import ActivityOption from '@/components/ActivityOption';
import alert from '@/components/Alert';
import styles from '@/components/PetStyles';

const Dog: React.FC = () => {
  const { 
    activityLevel: initialActivityLevel, 
    weight: initialWeight, 
    weightUnit: initialWeightUnit 
  } = useLocalSearchParams();
  const [activityLevel, setActivityLevel] = useState<string>(initialActivityLevel?.toString() || '2');
  const [weight, setWeight] = useState<string>(initialWeight?.toString() ?? '');
  const [weightUnit, setWeightUnit] = useState<'pounds' | 'kilograms'>(initialWeightUnit === 'pounds' ? 'pounds' : 'kilograms');
  const weightLimits = { 
    min: weightUnit === 'pounds' ? Math.floor(1 * 2.204623) : 1,
    max: weightUnit === 'pounds' ? Math.ceil(40 * 2.204623) : 40,
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
      alert('Invalid weight', `Weight must be between ${weightLimits.min} and ${weightLimits.max}${weightUnit === 'pounds' ? 'lbs' : 'kg'}`);
      return;
    }

    router.push({ pathname: '/result', params: { petType: 'dog', activityLevel, weight, weightUnit }});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pick Your Dog's Activity Level:</Text>
      
      <View style={styles.radioContainer}>
      <RadioButton.Group onValueChange={newValue => setActivityLevel(newValue)} value={activityLevel}>
        <ActivityOption
          value="2"
          label="2% - Maintenance"
          selectedValue={activityLevel}
          onPress={setActivityLevel}
        />
        <ActivityOption
          value="3"
          label="3% - Active"
          selectedValue={activityLevel}
          onPress={setActivityLevel}
        />
        <ActivityOption
          value="5"
          label="5% - Growing Puppy"
          selectedValue={activityLevel}
          onPress={setActivityLevel}
        />
        <ActivityOption
          value="10"
          label="10% - Growth Spurt"
          selectedValue={activityLevel}
          onPress={setActivityLevel}
        />
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
            <Text style={styles.buttonText}>Back</Text>
          </Button>
        </Link>
        <Button 
          mode="contained"
          style={[styles.button, styles.nextButton]} 
          color="rgba(0, 134, 214, 0.95)"
          onPress={handleNext}
          disabled={!weight?.length || weight.length === 0}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Dog;
