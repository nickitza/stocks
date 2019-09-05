import React from 'react';
import {Container, Header, Card, Button} from "semantic-ui-react";
import axios from "axios"
import CompanyForm from "./CompanyForm"

class Companies extends React.Component{
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
        <Button>Add Company</Button>
        <CompanyForm/>
        <Card.Group>
          {this.renderCompanies()}
        </Card.Group>
      </Container>
    )
  }
}

export default Companies