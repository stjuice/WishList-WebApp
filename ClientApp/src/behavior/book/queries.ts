export const getBookQuery = `
  query GetBook($id: String!) {
    book(id: $id) {
      id
      title
      authorId
    }
  }
`;

export const addBookMutation = `
  mutation AddBook($input: BookInput!) {
    addBook(input: $input) {
      id
      title
      authorId
    }
  }
`
