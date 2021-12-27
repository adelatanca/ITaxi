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
      userId
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
      userId
      createdAt
      updatedAt
      carUserId
      username
    }
  }
`;
