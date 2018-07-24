import React, { Component } from 'react';
import axios from 'axios';
import PostCreator from './PostCreator';
import bootstrap from 'bootstrap'
import './posts.css';

class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        };


    }

  componentDidMount() {
    axios.get('http://localhost:3333/getPosts').then(res => {
      const posts = res.data;
      this.setState({ posts });
    }).catch(function (error) {
          // handle error
          console.log(error);
    }).then(function () {
        console.log("NADA");
    });

  }

  render() {
    return (


        <div>
          <div>
              <div className="jumbotron">
                  <h1 id={"titulo"}>POSTEX APLICATION</h1>
                  <p>Deixe aqui o que pensa, como se sente e suas dúvidas de programação!</p>
              </div>
          </div>

          <div id={"noticias"} className="container">

            <div id={"postados"}>
                <table className={"table"}>
                    {this.state.posts.map(post =>

                        <div key={post.id}>
                            <tr>
                                <td id={"tituloPost"}>
                                  {post.titulo}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {post.mensagem}
                                </td>
                            </tr>
                            <br/>
                      </div>
                    )}
                </table>
            </div>
              <br/>
              <br/>
              <PostCreator/>
        </div>
        <br/>

      </div>


    );
  }
}

export default Posts;
