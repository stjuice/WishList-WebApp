import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import BookDetails from './components/book/Details'
import './custom.css'
import WishList from './components/wishList/List';
import WishItemDetails from './components/wishList/itemDetails/Details';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/book-details' component={BookDetails} />
    <Route path='/wishlist' component={WishList} />
    <Route path='/wishItem/:wishListId?' component={WishItemDetails} />

  </Layout>
);
