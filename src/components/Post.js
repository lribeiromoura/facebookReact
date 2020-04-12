import React , { Component } from 'react';
import Comment from './Comment';
class Post extends Component {

  render() {
    console.log(this.props.data)
    return(
      <>
        <div className="facebook-post__container">
          <div className="facebook-post__post-details">
            <div className="facebook-post__post-author">
            <img className="facebook-author__img" src={this.props.data.author.avatar}/>
              <p className="facebook-post__post-author-name">
                {this.props.data.author.name}
              </p>
              <p className="facebook-post__post-date">
                {this.props.data.date}
              </p>            
            </div>
            <div className="facebook-post__post-content">
              {this.props.data.content}
            </div>
          </div>
          <div className="facebook-post__divider"></div>
          {this.props.data.comments.map(comment =>  <Comment key={comment.id} Comment={comment}/>)}         
        </div>
      </>
    )
  }
}

export default Post;