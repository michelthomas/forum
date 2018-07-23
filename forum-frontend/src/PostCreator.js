import React, { Component } from 'react';
import axios from 'axios';

class PostCreator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            mensagem: ''
        };

        this.changeTitulo = this.changeTitulo.bind(this);
        this.changeMensagem = this.changeMensagem.bind(this);
        this.createPost = this.createPost.bind(this);
    }


    createPost(){
        console.log('Titulo: ' + this.state.titulo);
        console.log('Mensagem: ' + this.state.mensagem);

        axios.post('http://localhost:3333/addPost',{
            titulo: this.state.titulo,
            mensagem: this.state.mensagem
        })
            .then(function (response) {
                console.log(response);
                console.log("FOI")
            })
            .catch(function (error) {
                console.log(error);
                console.log("NÂO FOI")
            }).then(function () {
            console.log('Titulo: ' + this.state.titulo);
            console.log('Mensagem: ' + this.state.mensagem);
        });

    }

    changeTitulo(event) {
        this.setState(
            {
                titulo: event.target.value
            }
        );
    }

    changeMensagem(event){
        this.setState(
            {
                mensagem: event.target.value
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
                               onChange={this.changeTitulo}/>
                    </label>
                    <br/>
                    <label>
                        Mensagem:
                        <input type="text" name="mensagem" value={this.state.mensagem}
                               onChange={this.changeMensagem}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}

export default PostCreator;
