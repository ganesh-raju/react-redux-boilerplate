import React from 'react'
import PropTypes from 'prop-types'
import { getPosts, hidePosts } from '../actions/posts/posts'
import { connect } from 'react-redux'

const Posts = ({ getPosts, posts, hidePosts }) => {
  console.log(posts.data.length);
    return (
        <div>
          <br />
          { (posts.data && posts.data.length < 1)? ( 
            <div>
              <p> Get all posts </p>
              <input type="submit" value="GET POSTS" onClick={getPosts} className="btn btn-primary" />
            </div>
          ) : ( 
            <div>
              <p> Hide all posts </p>
              <input type="submit" value="HIDE POSTS" onClick={hidePosts} className="btn btn-primary" />
            </div>  
          )}
           { posts.data.map((post)=>(
               <div key={post.id} >
                <p><strong>{post.title}</strong></p>
                <p>{post.body}</p>
               </div>
           ))}
        </div>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    posts: state.posts
})


export default connect(mapStateToProps, { getPosts, hidePosts })(Posts)
