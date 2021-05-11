import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";



import Header from "./components/header/Header";
import CheckOut from "./pages/checkoutpage/CheckOut";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shoppage/ShopPage";
import SigninPage from "./pages/signinpage/SigninPage";

import "./App.css";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(async (signin) => {
      if (signin) {
        const userRef = await createUserProfileDocument(signin);
        await userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/signin"
          render={() => (user ? <Redirect to="/" /> : <SigninPage />)}
        />
        <Route  path='/checkout' component={CheckOut}/>
      </Switch>
    </div>
  );
}

export default App;
