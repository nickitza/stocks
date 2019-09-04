import React from 'react';
import './App.css';
import {Container, Header, Card, } from "semantic-ui-react";
import axios from 'axios'

class App extends React.Component{
  state = {companies: [], }

  componentDidMount() {
    //axios get
    axios.get("/api/companies")
    .then( res => {
      //update state
    this.setState({companies: res.data, })
    })
  }

  renderCompanies = () => {
    const {companies} = this.state

    if(companies.length <= 0)
      return <h2>No Companies</h2>
    return companies.map( company => (
      <Card>
        <Card.Content>
          <Card.Header>{company.name}</Card.Header>
          <Card.Description>{company.ticker}</Card.Description>
        </Card.Content>
      </Card>
    ))
  }

  render(){
    return(
      <Container>
        <Header>Companies</Header>
        <hr />
        <Card.Group>
          {this.renderCompanies()}
        </Card.Group>
      </Container>
    )
  }
}

export default App;
