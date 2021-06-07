import React, { Component } from 'react'
import axios from 'axios'
export class GetExampleUsingAxios extends Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: [],    // step 2
			errorMsg: ''
		}
	}

	componentDidMount() {  // step 3
		axios.get('https://reqres.in/api/users?page=2')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data.data })
				console.log(this.state.posts)
			})
			.catch(error => {
				console.log(error)
				this.setState({ errorMsg: 'Error retrieving data' })
			})
	}

	render() {
		console.log(this.state.posts.length)
		const { posts, errorMsg } = this.state
		console.log(posts + "j")

		return (
			
			<div>
				List of posts1
				
				{/*<thead>
								 <tr>
									<th>id</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>email</th>
									<th>photo</th>
									
								</tr>
							</thead> */}
				{posts.length
					? posts.map(post => 
						<table key={post.id}>
							 {/* <thead>
								<tr>
									<th>id</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>email</th>
									<th>photo</th>
									</tr>
							</thead>  */}
							<tboday>
								<tr>
									<td>{post.id}</td>
									<td>{post.first_name}</td>
									<td>{post.last_name}</td>
									<td>{post.email}</td>
									<td><img src={post.avatar}  /></td> 
								</tr>
							</tboday>
						</table>
					)
					: null}
				{errorMsg ? <div>{errorMsg}</div> : null}
			</div>
		)
	}
}

export default GetExampleUsingAxios
