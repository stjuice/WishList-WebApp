export const addNewUserMutation = `
  mutation AddNewUser($input: UserInput!) {
    addNewUser(userInput: $input) {
      id
      name
      email
    }
  }
`;

export const getUserQuery = `
  query GetUser($email: String!) {
    user(email: $email) {
      id
      name
      email
    }
  }
`;
