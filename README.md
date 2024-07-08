# ITaxi

## Overview

ITaxi is an innovative and comprehensive mobile application designed to enhance the taxi service experience for both drivers and passengers. The app provides seamless interfaces for booking rides, tracking vehicles in real-time, calculating fares, and processing payments securely using Stripe. ITaxi is divided into two main components: **DriverApp** for drivers and **UserApp** for passengers, each tailored to meet the specific needs of its users.

## Features

### UserApp
- **Real-time Tracking**: Monitor the location of taxis in real-time.
- **Ride Booking**: Easy interface to book rides quickly.
- **Fare Calculation**: Automated fare calculation based on distance and time.
- **Secure Payments**: Payments processed securely using Stripe.
- **Ride History**: View past rides and download receipts.

### DriverApp
- **Ride Management**: Manage incoming ride requests and current rides.
- **Navigation**: Integrated maps and directions for efficient navigation.
- **Earnings Tracking**: View earnings and ride summaries.
- **User Ratings**: Receive and view passenger ratings.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/adelatanca99/ITaxi.git
   cd ITaxi
2. **Install dependencies**:
   ```sh
   npm install

3. **Run the UserApp**:
      ```sh
      cd UserApp
      expo start

5. **Run the DriverApp**:
      ```sh
      cd DriverApp
      expo start
      
7. **Run the UserApp Server for Stripe**:
   ```sh
   cd UserApp
   cd server
   npx nodemon server.js


## Usage

### Booking a Ride (UserApp)
> Open the application and log in.

> Enter your pickup and drop-off locations.

> Choose a taxi from the list of available taxis.

> Confirm the booking and track the taxi in real-time.

### Managing Rides (DriverApp)
> Log in to the DriverApp.

> View and accept incoming ride requests.

> Navigate to the passenger’s location using integrated maps.

> Complete the ride and track earnings.




###  Key Technologies and Packages
The ITaxi project leverages several key technologies and packages:

**1. React Native**: Framework for building native apps using React.

**2. Expo**: Toolchain for building and deploying React Native applications.

**3. Stripe**: Payment processing library used for secure transactions.

**4. AWS Amplify**: Tools for integrating with AWS services such as authentication and storage.

**5. React Navigation**: Library for routing and navigation in React Native apps.

**6. Moment.js**: Library for parsing, validating, and displaying dates and times.

**7. Geolocation**: Provides access to the device’s location.

**8. React Native Maps**: Provides map components for React Native apps.


###

## App Screens
<img width="674" alt="image" src="https://github.com/adelatanca99/ITaxi/assets/95678533/77358fe4-6526-4b94-bfdf-00935491d70a">
<img width="632" alt="image" src="https://github.com/adelatanca99/ITaxi/assets/95678533/ecf63b4d-666b-4767-b669-8aae2ab07980">
<img width="531" alt="image" src="https://github.com/adelatanca99/ITaxi/assets/95678533/3da5718a-2b2c-4749-b81e-6bd8651acef2">
<img width="658" alt="image" src="https://github.com/adelatanca99/ITaxi/assets/95678533/2f79d80e-9ed2-4448-8ba5-37ce24629a07">
<img width="666" alt="image" src="https://github.com/adelatanca99/ITaxi/assets/95678533/cebb6883-0682-498a-987f-97bd1a6a7d5e">
<img width="646" alt="image" src="https://github.com/adelatanca99/ITaxi/assets/95678533/c0a71574-06ef-4e0d-a6ca-e4fd192a522a">


## Architecture
<img width="577" alt="image" src="https://github.com/adelatanca99/ITaxi/assets/95678533/1b9de5b6-b440-4a0b-8a1a-13ff2a298f0c">

## Payment flow
<img width="607" alt="image" src="https://github.com/adelatanca99/ITaxi/assets/95678533/49a6097a-6514-491e-b485-b0b297f60e32">
