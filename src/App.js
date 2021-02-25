import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { NotFound, NewItem } from 'components'
import {AddForm,  HeaderBlock, PostsList, FullPost } from 'modules' 

import 'style/app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderBlock
          title={"Заголовок сайта"}
          description={"Описание"}
          imageUrl={"https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
        />
        <div className="container">
          <div className="content">
            <div>
              <Switch>
                <Route 
                  path="/" 
                  exact
                  component={()=> <PostsList/>}/>
                <Route 
                  path="/post/:id" 
                  exact 
                  component={FullPost}/>
                <Route path="/post/:id/edit" 
                  exact 
                  component={AddForm}/>
                <Route exact path="/new-item" component={NewItem}/>
                <Route path="*" component={NotFound}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
