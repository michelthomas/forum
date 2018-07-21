import React, { Component } from 'react';
import axios from 'axios';

class PostCreator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      mensagem: ''
    };

    this.changeData = this.changeData.bind(this);
    this.createPost = this.createPost.bind(this);
  }


  createPost(){
    console.log('Titulo: ' + this.state.titulo);
    console.log('Mensagem: ' + this.state.mensagem);

    axios({ method: 'POST', url: '/addPost', headers: {'Access-Control-Allow-Origin': '*'}, data: {
          titulo: this.state.titulo,
          mensagem: this.state.mensagem
    } })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  changeData(event){
    this.setState(
      {
        titulo: event.target.titulo,
        mensagem: event.target.mensagem
      }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createPost}>
          <label>
              Título:
              <input type="text" name="titulo" value={this.state.titulo}
                onChange={this.changeData}/>
          </label>
          <br/>
          <label>
              Mensagem:
              <input type="text" name="mensagem" value={this.state.mensagem}
                onChange={this.changeData}/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PostCreator;
