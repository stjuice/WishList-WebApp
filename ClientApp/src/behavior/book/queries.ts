export const getBookQuery = `
  query GetBook($id: String!) {
    book(id: $id) {
      id
      title
      authorId
    }
  }
`;
