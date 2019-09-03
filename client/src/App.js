import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Header, Card, } from "semantic-ui-react"

class App extends React.Component{
  state = {companies: [], }

  componentDidMount() {
    //axios get
    //update state
  }

  render(){
    return(
      <>
        <Header>Companies</Header>
        <hr />
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>{company.name}</Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </>
    )
  }
}

export default App;
