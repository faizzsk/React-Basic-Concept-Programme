import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom'
import Display from './Display';
import AddCompany from './AddCompany';
import EditCompany from './EditCompany';


function NavBarCompany (){
return(
  <Router>
  <div className="App">
    
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Company</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
        <li><Link class="nav-link"  to={'/CompanyReg/Display'}>Home</Link></li>
        </li>
        <li class="nav-item">
        <li><Link class="nav-link" to={'/CompanyReg/AddCompany/'}>Add</Link></li>
        </li>
        <li class="nav-item">
        <li><Link class="nav-link"  to={'/CompanyReg/Display'}>Display</Link></li>
        </li>
        <li class="nav-item">
        <li><Link class="nav-link"  to={'/CompanyReg/EditCompany/'}></Link></li>
        </li>
      </ul>
    </div>
  </nav>
  
    <Switch>
      <Route path={'/CompanyReg/AddCompany'} exact component={AddCompany}></Route>
      <Route path={'/CompanyReg/Display'}  component={Display}></Route>
      <Route path={'/CompanyReg/EditCompany/'}  component={EditCompany}></Route>
      {/* //<Route path={'/Compnonets/DisplayData' exact component={About}></Route> */}
    </Switch>
  </div> 
  </Router>
)
    

}

export default NavBarCompany