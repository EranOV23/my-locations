import React from 'react';
import {Route, Redirect, withRouter} from 'react-router';

import NavBar from './nav/NavBar';
import ErrorMessage from './error-message/ErrorMessage';
import Locations from './locations/Locations';
import Categories from './categories/Categories';
import Footer from './footer/Footer';
import AddItem from './addItem/AddItem';
import Map from './map/Map';

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null, 
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo){
    this.setState({
      error: error,
      errorInfo: errorInfo
    })  
  }

  render() {
    if(this.state.errorInfo){
      return(
        <ErrorMessage error={this.state.error} errorInfo={this.state.errorInfo}/>
      )
    }

    else return (
      <div>

        <Route path="/:page" component={NavBar}/>
        <Route exact path="/" render={ () => <Redirect to="/categories"/> }/>
        <Route path="/categories" component={Categories}/>
        <Route exact path="/manage/:type" component={AddItem}/>
        <Route path="/manage/:type/edit/:item" component={AddItem}/>
        <Route path="/locations" component={Locations}/>
        <Route path="/map/:lat/:lng" component={Map}/>
        <Route path="/" component={Footer}/>

      </div>
    )
  }
}

export default withRouter(Root)
