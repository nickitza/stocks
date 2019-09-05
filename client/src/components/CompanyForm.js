import React from "react"
import {Form, } from "semantic-ui-react"

class CompanyForm extends React.Component {
  state = {name: "", ticker:""}

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = () => {

  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
          fluid
          label="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          />
          <Form.Input
          fluid
          label="Ticker"
          name="ticker"
          value={this.state.ticker}
          onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}
export default CompanyForm
