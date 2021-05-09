
import {Route , Switch } from 'react-router-dom';

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SigninPage from "./pages/signinpage/SigninPage";

import './App.css'



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/'  component={Homepage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SigninPage} />
      </Switch>
   
    </div>
  );
}

export default App;
