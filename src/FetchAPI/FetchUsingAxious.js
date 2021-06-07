import react from "react"
import axios from "axios"

class FetchUsingAxious extends react.Component{

    constructor(props)
    {
        super(props)
        this.state = 
        {
            posts: [],   
			errorMsg: ''
        }
    
    }
       
        componentDidMount()
        {
           // this.FetchData()
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
    
    // FetchData = ()=>{

    //     axios.get('https://reqres.in/api/users?page=2').then(response=>{
    //             //console.log(response);
    //             this.setState({user : response.data.data})
    //             console.log(this.state.user)

    //             }).catch(error =>{
    //                     this.setState({error :"error "})
    //             })
        

    // }

   
render(){
   // console.log(this.state.posts.length)

    const { posts, errorMsg } = this.state
    console.log(posts + "j")

    console.log("  F    "+posts);

    return (
		//console.log(posts + "j")


        <div>
            
                    {posts.length
					? posts.map(post => 
						<table key={post.id}>
							<tbody>
								<tr>
									<td>{post.id}</td>
									<td>{post.first_name}</td>
									<td>{post.last_name}</td>
									<td>{post.email}</td>
								</tr>
							</tbody>
						</table>
					)
					: null}
				{errorMsg ? <div>{errorMsg}</div> : null}
			</div>

    )
    
    
    
        
}


}

export default FetchUsingAxious;