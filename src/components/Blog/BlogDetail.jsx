import React, { Component } from "react";
import axios from "axios";
/*
class BlogDetail extends Component {
  state = {
    post: null
  }
  componentDidMount(){
    let id = this.props.match.params.blog_id;
    axios.get('https://blog.songsnepal.com/wp-json/wp/v2/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        });
        //console.log(res.data);
      });
  }
  render() {

    const post = this.state.post ? (
      <div>
        <h4>{this.state.post.title.rendered}</h4>
        <p 
          dangerouslySetInnerHTML={{__html: this.state.post.content.rendered}}
        >
        </p>
      </div>
    ) : (
      <div></div>
    );

    return (
      <div>
        {post}
      </div>
    )
  }
}

export default BlogDetail

*/

const BlogDetail = () => {
	return (
		<div>
			<h1> </h1>
		</div>
	);
};

export default BlogDetail;
