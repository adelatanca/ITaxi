/* eslint-disable */
// this is an auto generated file. This will be overwritten

<<<<<<< HEAD
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
      id
      username
      email
=======
export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
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
      hasPromotion
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
      updatedAt
      userOrdersId
      carOrdersId
      orderUserId
      orderCarId
      username
    }
  }
`;
export const onCarUpdated = /* GraphQL */ `
  subscription OnCarUpdated($id: ID!) {
    onCarUpdated(id: $id) {
      id
      type
      latitude
      longitude
      heading
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
      username
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
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
          hasPromotion
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String) {
    onUpdateUser(username: $username) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String) {
    onDeleteUser(username: $username) {
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($username: String) {
    onCreateCar(username: $username) {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($username: String) {
    onUpdateCar(username: $username) {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($username: String) {
    onDeleteCar(username: $username) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($username: String) {
    onCreateOrder(username: $username) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($username: String) {
    onUpdateOrder(username: $username) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($username: String) {
    onDeleteOrder(username: $username) {
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
