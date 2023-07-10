import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import './custom.css'
import WishList from './components/wishList/List';
import WishItemDetails from './components/wishList/itemDetails/Details';
import NewWishItemForm from './components/wishList/NewWishItemForm';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/wishlist' component={WishList} />
    <Route path='/wishItem/:wishListId?' component={WishItemDetails} />
    <Route path="/new-wish" component={NewWishItemForm} />
  </Layout>
);
