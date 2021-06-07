import AddUser from './AddUser'
import DisplayData from './DisplayData'
import EditUserComponent from "./EditUserComponent"
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom'


function NavBarUser()
{
    return(
         <Router>
<div className="App">
  
 <nav  class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">User Registration</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item active">
      <span><Link  class="nav-link " to={'/Compnonets/DisplayData'}>Home</Link></span>
      </li>
      <li class="nav-item">
      <span><Link  class="nav-link " to={'/Compnonets/AddUser'}>Add</Link></span>
      </li>
      <li class="nav-item">
      <span><Link class="nav-link "  to={'/Compnonets/DisplayData'}>Display</Link></span>
      </li>
      <li class="nav-item">
      <span><Link class="nav-link "  to={'/Compnonets/EditUserComponent'}></Link></span>
      </li>
    </ul>
  </div>
</nav>

  <Switch>
    <Route path={'/Compnonets/AddUser'} exact component={AddUser}></Route>
    <Route path={'/Compnonets/DisplayData/'}  component={DisplayData}></Route>
    <Route path={'/Compnonets/EditUserComponent/'}  component={EditUserComponent}></Route>
  </Switch>
</div>
</Router> 

    )
}

export default NavBarUser