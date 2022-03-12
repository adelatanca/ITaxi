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
      phoneNumber
      profilePicture
      orders {
        items {
          id
          createdAt
          type
          status
          originName
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
        username
      }
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
      phoneNumber
      profilePicture
      orders {
        items {
          id
          createdAt
          type
          status
          originName
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
        username
      }
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
      phoneNumber
      profilePicture
      orders {
        items {
          id
          createdAt
          type
          status
          originName
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
        username
      }
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
      carNumber
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originName
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
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
      userId
      user {
        id
        username
        email
        phoneNumber
        profilePicture
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
      carNumber
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originName
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
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
      userId
      user {
        id
        username
        email
        phoneNumber
        profilePicture
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
      carNumber
      isActive
      orders {
        items {
          id
          createdAt
          type
          status
          originName
          originLatitude
          originLongitude
          destLatitude
          destLongitude
          destinationName
          stopLatitude
          stopLongitude
          stopName
          duration
          pret
          paymentMethod
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
      userId
      user {
        id
        username
        email
        phoneNumber
        profilePicture
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
      status
      originName
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      destinationName
      stopLatitude
      stopLongitude
      stopName
      duration
      pret
      paymentMethod
      userId
      user {
        id
        username
        email
        phoneNumber
        profilePicture
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
      carId
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
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
      status
      originName
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      destinationName
      stopLatitude
      stopLongitude
      stopName
      duration
      pret
      paymentMethod
      userId
      user {
        id
        username
        email
        phoneNumber
        profilePicture
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
      carId
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
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
      status
      originName
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      destinationName
      stopLatitude
      stopLongitude
      stopName
      duration
      pret
      paymentMethod
      userId
      user {
        id
        username
        email
        phoneNumber
        profilePicture
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
      carId
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        carUserId
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
