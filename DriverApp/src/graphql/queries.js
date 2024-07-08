export const getCarId = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
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
      carNumber
      isActive
      userId
      user {
        id
        username
        email
        profilePicture
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

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phoneNumber
      profilePicture
      reviewNumbers
      reviewAmount
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
        status
        originLatitude
        originLongitude
        destLatitude
        destLongitude
        stopLatitude
        stopLongitude
        originName
        destinationName
        stopName
        pret
        paymentMethod
        duration
        userId
        user {
          id
          username
          email
          profilePicture
          createdAt
          updatedAt
          reviewNumbers
          reviewAmount
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
          userId
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
      nextToken
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
      nextToken
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
          reviewNumbers
          reviewAmount
        }
        createdAt
        updatedAt
        carUserId
        username
      }
      nextToken
    }
  }
`;
