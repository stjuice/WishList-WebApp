import * as React from 'react';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import './custom.css'
import WishList from './components/wishList/List';
import WishItemDetails from './components/wishList/itemDetails/Details';
import NewWishItemForm from './components/wishList/NewWishItemForm';
import jwt_decode from 'jwt-decode';

export default () => {
  const [user, setUser] = useState<any>();

  const handleCallbackResponse = (response: any) => {
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv")!.hidden = true;
  };

  const handleSignOut = () => {
    setUser(undefined);
    document.getElementById("signInDiv")!.hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "470660842727-22ejg8e0k7sjs4ulpj2iadshagaq983h.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )
  }, []);

  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/wishlist' component={WishList} />
      <Route path='/wishItem/:wishListId?' component={WishItemDetails} />
      <Route path="/new-wish" component={NewWishItemForm} />
      <div id="signInDiv"></div>
      {
        user
        && (
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
            <button onClick={handleSignOut}>SignOut</button>
          </div>
        )
      }
    </Layout>
  )
};
