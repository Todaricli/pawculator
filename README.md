# pawculator

## Project Desc
Pawculator is a mobile app designed to help pet owners calculate the proper amount of raw food to feed their cats or dogs. By selecting the pet type, entering their activity level, and providing the pet's weight (in pounds or kilograms), users will receive personalized feeding recommendations. The app will feature a sleek, user-friendly interface, and is built with JavaScript, React or React Native.

## Run the app instruction
The app was developed using Node.js v22.9.0 and NPM v10.8.3
- Run `npm install` to install dependencies
- Run `npm expo start` to run the dev server.

## Functionality/Pages

**1️⃣ Welcome Screen:**

1. A clean and modern screen displaying the app name (Pawculator) and a brief description.
2. Users can select between “Cat” and “Dog” options using large, visually distinct buttons or icons.
3. This selection should determine the calculation parameters for the next steps.
4. An call to start button after "Cat and Dog" selected.

**2️⃣ Activity Level & Weight Input Screen:**

1. After pet selection, the user is prompted to select the pet's activity level from options.
2. Each option will correspond to a different percentage of the pet's body weight used in the calculation formula.
3. User enters the pet’s weight with max and min prompt (If input go over or under the data range in the provided URL, should let user aware of the min and max weight and ask user to enter again with dialog box)
4. Input field should accept numbers, with the ability to toggle between pounds (lbs) and kilograms (kg).
5. Use of a conversion feature (behind the scenes) if the user inputs the weight in either metric, allowing flexibility.

**3️⃣ Result Display Screen:**

1. Display the calculated amount of raw food recommended (in grams or ounces).
2. Offer a button for users to "Start Over".

## Exception Handling
1. Start button should be disabled, if pet has not selected.
2. If missing weight, activity level or units value, then generate result button should be disabled.
3. Dialog box prompt user of max and min weight, if user entered a weight value execced or under feasible range and clicked the generate button.

## Acceptance criteria
Satisfied all functionalities, page requirement, exception handling requirement and complete run app instruction stated above

## Others
For data needed to build this app, please navigate to the URL: https://www.rawessentials.co.nz/education/feeding-amounts?gad_source=1&gclid=Cj0KCQjwjNS3BhChARIsAOxBM6pNytSx-OnYQePC2UoWHmF_rRXRxoNVUQxS3zNYycnL3C0PK7nGRooaAgOREALw_wcB
