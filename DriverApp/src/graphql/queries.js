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
        userId
        user {
          id
          username
          email
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
