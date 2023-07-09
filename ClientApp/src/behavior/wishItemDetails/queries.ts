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

export const addNewWishItemMutation = `
  mutation AddNewWishItem($input: WishItemInput!) {
    addNewWishItem(wishItemInput: $input) {
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
`
