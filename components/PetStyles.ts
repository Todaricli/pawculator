import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
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

