import React, { Component } from 'react';
import Post from './Post';

const parentDiv = {
align: 'center',
margin: '0px auto auto auto',
textAlign: 'center',
}

class AllPost extends Component {
render() {
	return (
	<div style={parentDiv}>
	<h1 style={{color:'#8A2482'}}>Pics <span
	style={{color: '#248A6E'}}>Villa</span>
	</h1>
	
	<p>Here you can see all of your selected Images</p>

	<hr></hr>
	<h1>All Posts</h1>
	<Post/>
	</div>
	);
}
}

export default AllPost;
