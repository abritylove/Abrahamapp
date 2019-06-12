import React from "react";
import{connect} from "react-redux";
import{fetchPostsAndUsers} from "../actions";
import UserHeader from "./UserHeader";
class PostListextends react.Component{
componentDidMount(){
this.props.fetchPostsAndUsers();
}
renderList(){
return this.props.posts.map(post=>{
return(
<div className="item" key={post.id}>
<i className="small middle alignes icon user"/>
<div className="content">
<divclassName="description">
<h2>{post.title}</h2>
<p>{post.body}</p>
</div>
<UserHeader userId={post.userId}/>
</div>
</div>
);
});
}
render(){
return<div className="ui relaxed divided list">{this.renderList()}</div>;
}
}
const mapStateToProps=state=>{
  return {posts:stste.posts};
};
export default connect(
mapStateToProps,
{fetchPostsAndUsers})(PostList);
