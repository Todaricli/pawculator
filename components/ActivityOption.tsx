import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ActivityOptionProps {
  value: string;
  label: string;
  selectedValue: string;
  onPress: (value: string) => void;
}

const ActivityOption: React.FC<ActivityOptionProps> = ({ value, label, selectedValue, onPress }) => {
  const isSelected = selectedValue === value;
  return (
    <TouchableOpacity
      style={[styles.unitButton, isSelected ? styles.selectedButton : styles.unselectedButton]}
      onPress={() => onPress(value)}
    >
      <Text style={isSelected ? styles.selectedButtonText : styles.unselectedButtonText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  unitButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: 'rgba(0, 134, 214, 0.95)',
  },
  unselectedButton: {
    backgroundColor: '#f0f0f0',
  },
  selectedButtonText: {
    color: 'white',
  },
  unselectedButtonText: {
    color: 'black',
  },
});

export default ActivityOption;
