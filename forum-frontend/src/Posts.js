import React, { Component } from 'react';
import axios from 'axios';
import PostCreator from './PostCreator';

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
        <h1>Posts</h1>
        <div>
        {this.state.posts.map(post =>
          <div key={post.id}>
            <div>
              {post.titulo}
            </div>
            <div>
              {post.mensagem}
            </div>
            <br/>
          </div>
        )}
        </div>
        <br/>
        <PostCreator/>
      </div>
    );
  }
}

export default Posts;
