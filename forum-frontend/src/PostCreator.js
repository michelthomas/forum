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
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Título:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="titulo" placeholder="Título" value={this.state.titulo}
                                   onChange={this.changeTitulo}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Mensagem:</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" placeholder="Mensagem"  name="mensagem" value={this.state.mensagem}
                                      onChange={this.changeMensagem}/>
                        </div>
                    </div>



                    <input type="submit" class="btn btn-primary" value="Submit" />
                </form>
            </div>
        );
    }

}

export default PostCreator;
