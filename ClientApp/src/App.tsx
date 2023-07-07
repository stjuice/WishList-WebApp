import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import BookDetails from './components/book/Details'
import './custom.css'
import WishListDetails from './components/wishList/List';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/book-details' component={BookDetails} />
    <Route path='/wishlist' component={WishListDetails} />
  </Layout>
);
