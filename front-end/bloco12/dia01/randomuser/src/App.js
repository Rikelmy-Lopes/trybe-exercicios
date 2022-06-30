import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      api: undefined,
      loading: false,
    }
  }

  getPerson = () => {
    const url = 'https://api.randomuser.me/';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        api: data.results,
        loading: true,
      })
    })
  }

  componentDidMount() {
    this.getPerson();
  }

  // shouldComponentUpdate(){
  //   // const { api, loading } = this.state;
  //   // if (api[0].dob.age < 50) return false
  // }

  render() {
    const { loading, api } = this.state 

    return (
      <div>
        { loading === false ? 'Carregando...' : <div>
          <p>
            Name: {api[0].name.first}
          </p>
          <p>
            Email: {api[0].email}
          </p>
          <p>
            Idade: {api[0].dob.age}
          </p>
          <img src={api[0].picture.large}></img>
        </div> }
      </div>
    )
  }
}


export default App;
