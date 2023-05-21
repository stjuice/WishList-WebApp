import { BookState, RootState } from '../behavior/book/types'; // Import the BookState type from your types file

// type RootState = interface DefaultRootState extends {
//   book: BookState;
//   // Add other state properties here if needed
// }

type AppState = {
  book: BookState
}

declare module 'react-redux' {
  interface DefaultRootState extends AppState { }
}