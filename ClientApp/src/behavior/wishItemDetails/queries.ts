export const getWishItemDetailsQuery = `
  query GetWishItem($id: String!) {
    wishItem(id: $id) {
      id
      title
      priceInfo {
        price
        currencyId
      }
      link
      additionalInfo?
    }
  }
`;