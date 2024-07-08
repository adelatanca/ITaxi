/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
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
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        user {
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
          createdAt
          updatedAt
=======
          carNumber
          isActive
          userId
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
      nextToken
    }
  }
`;
