import React, { Component } from "react";
import api from './api';

class App extends Component {

  state = {
    usuarios: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ usuarios: response.data });
}

  render() {

    const { usuarios } = this.state;

    return(
      <div>
        <h1>Listar Usuarios</h1>
        { usuarios.map(usuario =>(
          <li key={usuario.company.id}>
            <h2><strong>Usuário: </strong>
            {usuario.company.name} </h2>
            <p>{usuario.company.catchPhrase}</p>
          </li>
        ))}
      </div>
    )
  }
}

export default App;
