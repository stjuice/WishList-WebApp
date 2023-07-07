export const getWishListQuery = `
  query GetWishList() {
    wishList() {
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