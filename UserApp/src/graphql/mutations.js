/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
<<<<<<< HEAD
=======
      phoneNumber
      profilePicture
      reviewNumbers
      reviewAmount
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      orders {
        items {
          id
          createdAt
          type
<<<<<<< HEAD
=======
          status
          originName
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          originLatitude
          originLongitude
          destLatitude
          destLongitude
<<<<<<< HEAD
=======
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
          hasPromotion
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          orderUserId
          orderCarId
          username
        }
        nextToken
      }
<<<<<<< HEAD
=======
      car {
        id
        type
        latitude
        longitude
        heading
        carNumber
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          phoneNumber
          profilePicture
          reviewNumbers
          reviewAmount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
        username
      }
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
<<<<<<< HEAD
=======
      phoneNumber
      profilePicture
      reviewNumbers
      reviewAmount
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      orders {
        items {
          id
          createdAt
          type
<<<<<<< HEAD
=======
          status
          originName
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          originLatitude
          originLongitude
          destLatitude
          destLongitude
<<<<<<< HEAD
=======
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
          hasPromotion
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          orderUserId
          orderCarId
          username
        }
        nextToken
      }
<<<<<<< HEAD
=======
      car {
        id
        type
        latitude
        longitude
        heading
        carNumber
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          phoneNumber
          profilePicture
          reviewNumbers
          reviewAmount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
        username
      }
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
<<<<<<< HEAD
=======
      phoneNumber
      profilePicture
      reviewNumbers
      reviewAmount
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      orders {
        items {
          id
          createdAt
          type
<<<<<<< HEAD
=======
          status
          originName
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          originLatitude
          originLongitude
          destLatitude
          destLongitude
<<<<<<< HEAD
=======
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
          hasPromotion
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          orderUserId
          orderCarId
          username
        }
        nextToken
      }
<<<<<<< HEAD
=======
      car {
        id
        type
        latitude
        longitude
        heading
        carNumber
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          phoneNumber
          profilePicture
          reviewNumbers
          reviewAmount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
        username
      }
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      createdAt
      updatedAt
    }
  }
`;
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
<<<<<<< HEAD
=======
      carNumber
      isActive
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      orders {
        items {
          id
          createdAt
          type
<<<<<<< HEAD
=======
          status
          originName
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          originLatitude
          originLongitude
          destLatitude
          destLongitude
<<<<<<< HEAD
=======
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
          hasPromotion
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          orderUserId
          orderCarId
          username
        }
        nextToken
      }
<<<<<<< HEAD
      createdAt
      updatedAt
=======
      userId
      user {
        id
        username
        email
        phoneNumber
        profilePicture
        reviewNumbers
        reviewAmount
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          carNumber
          isActive
          userId
          createdAt
          updatedAt
          carUserId
          username
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      carUserId
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      username
    }
  }
`;
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
<<<<<<< HEAD
=======
      carNumber
      isActive
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      orders {
        items {
          id
          createdAt
          type
<<<<<<< HEAD
=======
          status
          originName
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          originLatitude
          originLongitude
          destLatitude
          destLongitude
<<<<<<< HEAD
=======
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
          hasPromotion
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          orderUserId
          orderCarId
          username
        }
        nextToken
      }
<<<<<<< HEAD
      createdAt
      updatedAt
=======
      userId
      user {
        id
        username
        email
        phoneNumber
        profilePicture
        reviewNumbers
        reviewAmount
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          carNumber
          isActive
          userId
          createdAt
          updatedAt
          carUserId
          username
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      carUserId
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      username
    }
  }
`;
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
<<<<<<< HEAD
=======
      carNumber
      isActive
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      orders {
        items {
          id
          createdAt
          type
<<<<<<< HEAD
=======
          status
          originName
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          originLatitude
          originLongitude
          destLatitude
          destLongitude
<<<<<<< HEAD
=======
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
          hasPromotion
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          userId
          carId
          updatedAt
          userOrdersId
          carOrdersId
          orderUserId
          orderCarId
          username
        }
        nextToken
      }
<<<<<<< HEAD
      createdAt
      updatedAt
=======
      userId
      user {
        id
        username
        email
        phoneNumber
        profilePicture
        reviewNumbers
        reviewAmount
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          carNumber
          isActive
          userId
          createdAt
          updatedAt
          carUserId
          username
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      carUserId
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      username
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      createdAt
      type
<<<<<<< HEAD
=======
      status
      originName
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      originLatitude
      originLongitude
      destLatitude
      destLongitude
<<<<<<< HEAD
=======
      destinationName
      stopLatitude
      stopLongitude
      stopName
      duration
      pret
      paymentMethod
      hasPromotion
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      userId
      user {
        id
        username
        email
<<<<<<< HEAD
        orders {
          nextToken
        }
=======
        phoneNumber
        profilePicture
        reviewNumbers
        reviewAmount
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          carNumber
          isActive
          userId
          createdAt
          updatedAt
          carUserId
          username
        }
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
<<<<<<< HEAD
        orders {
          nextToken
        }
        createdAt
        updatedAt
=======
        carNumber
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          phoneNumber
          profilePicture
          reviewNumbers
          reviewAmount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
        username
      }
      updatedAt
      userOrdersId
      carOrdersId
      orderUserId
      orderCarId
      username
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      createdAt
      type
<<<<<<< HEAD
=======
      status
      originName
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      originLatitude
      originLongitude
      destLatitude
      destLongitude
<<<<<<< HEAD
=======
      destinationName
      stopLatitude
      stopLongitude
      stopName
      duration
      pret
      paymentMethod
      hasPromotion
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      userId
      user {
        id
        username
        email
<<<<<<< HEAD
        orders {
          nextToken
        }
=======
        phoneNumber
        profilePicture
        reviewNumbers
        reviewAmount
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          carNumber
          isActive
          userId
          createdAt
          updatedAt
          carUserId
          username
        }
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
<<<<<<< HEAD
        orders {
          nextToken
        }
        createdAt
        updatedAt
=======
        carNumber
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          phoneNumber
          profilePicture
          reviewNumbers
          reviewAmount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
        username
      }
      updatedAt
      userOrdersId
      carOrdersId
      orderUserId
      orderCarId
      username
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      createdAt
      type
<<<<<<< HEAD
=======
      status
      originName
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      originLatitude
      originLongitude
      destLatitude
      destLongitude
<<<<<<< HEAD
=======
      destinationName
      stopLatitude
      stopLongitude
      stopName
      duration
      pret
      paymentMethod
      hasPromotion
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      userId
      user {
        id
        username
        email
<<<<<<< HEAD
        orders {
          nextToken
        }
=======
        phoneNumber
        profilePicture
        reviewNumbers
        reviewAmount
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          carNumber
          isActive
          userId
          createdAt
          updatedAt
          carUserId
          username
        }
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
        createdAt
        updatedAt
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
<<<<<<< HEAD
        orders {
          nextToken
        }
        createdAt
        updatedAt
=======
        carNumber
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          phoneNumber
          profilePicture
          reviewNumbers
          reviewAmount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
        username
      }
      updatedAt
      userOrdersId
      carOrdersId
      orderUserId
      orderCarId
      username
    }
  }
`;
