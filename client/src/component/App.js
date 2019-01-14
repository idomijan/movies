import React, { Component } from 'react';
import TopNav from './TopNav';
import ItemsBody from './ItemsBody';
import SingleItem from './SingleItem';
import CreateMovie from './CreateMovie';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <TopNav />
            <div className="container">
              <Switch>
                <Route path="/new" component={CreateMovie} />
                <Route path="/:id" component={SingleItem} />
                <Route path="/" exact component={ItemsBody} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
