import React, { Component } from 'react';

class Post extends Component {
render() {
return (
	<div
	style={{ width: '50%', margin: '0px auto' }}
	>
	<h2>{localStorage.getItem('title')}</h2>
	<img src={localStorage.getItem('image')} style={{width: '300px'}}
	alt={'Internet Error!'}
	/>
	 <p style={{width: '50%', margin: '0px auto'}}
	>{localStorage.getItem('message')}</p> 

	</div>
);
}
}
export default Post;
