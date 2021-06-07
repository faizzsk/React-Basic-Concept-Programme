import react from "react"
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom'
import AddEmployee from './AddEmployee';
import DisplayEmp from './DisplayEmp';
import EditEmployee from './EditEmployee';

function Navbar()
{
    return(
<Router>
<div className="App">
  
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Employee</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <li><Link class="nav-link"  to={'/Employee/DisplayEmp'}>Home</Link></li>
      </li>
      <li class="nav-item">
      <li><Link class="nav-link" to={'/Employee/AddEmployee/'}>Add</Link></li>
      </li>
      <li class="nav-item">
      <li><Link class="nav-link"  to={'/Employee/DisplayEmp'}>Display</Link></li>
      </li>
      <li class="nav-item">
      <li><Link class="nav-link"  to={'/Employee/EditEmployee/'}></Link></li>
      </li>
    </ul>
  </div>
</nav>

  <Switch>
    <Route path={'/Employee/AddEmployee'} exact component={AddEmployee}></Route>
    <Route path={'/Employee/DisplayEmp'}  component={DisplayEmp}></Route>
    <Route path={'/Employee/EditEmployee/'}  component={EditEmployee}></Route>
    {/* //<Route path={'/Compnonets/DisplayData' exact component={About}></Route> */}
  </Switch>
</div> 
</Router>

    )

}


export default Navbar