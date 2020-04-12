import React , { Component } from 'react';

class Comment extends Component {
  render() {
    console.log(this.props)
    return(
      <div className="facebook-comment__post-comment">
        <div className="facebook-comment__div">
          <div  className="facebook-comment__div-author">
            <img className="facebook-author__img" src={this.props.Comment.author.avatar}/>
            <p className="facebook-comment__comment-name-author">
              {this.props.Comment.author.name}
            </p>
          </div>
          <div className="facebook-comment__div-comment">
              {this.props.Comment.content}
          </div>

        </div>
      </div>
    )
  }
}

export default Comment;