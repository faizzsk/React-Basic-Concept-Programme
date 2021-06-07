import React from 'react'
import logo from './logo.svg';
import 'C:/Users/iluser/Data/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css'
import FragmentDemo from './PDF4/FragmentDemo'
import './App.css';
import AddUser from './Compnonets/AddUser'
import DisplayData from './Compnonets/DisplayData'
import Service from './RoutingComponent/Service'
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom'
import PureComDemo from './PDF4/PureComDemo';
import MemoDemo from './PDF4/MemoDemo';
import RefDemo from './PDF4/RefDemo';
import LocalStorageDemo from './LocalStorageDemo';
import ListRendering from './Assignment/ListRendering';
import CurrentTime from './Assignment/CurrentTime';
import DisplayInTable from './DisplayInTable';
import PortalDemo from './PDF4/Portals';
import ErrorBoundary from './PDF4/ErrorBoundary';
import ErrorBoundryEg from './PDF4/ErrorBoundryEg';
import ClickCounterUsingHoc from './PDF4/ClickCounterUsingHoc';
import Fetch from './FetchAPI/Fetch';
import FetchUsingAxious from "./FetchAPI/FetchUsingAxious"
import GetExampleUsingAxios from './FetchAPI/GetExampleUsingAxios';
import FetchSingleData from './FetchAPI/FetchSingleData';
import FetchSingleUsingAxious from './FetchAPI/FetchSingleUsingAxious';
import PostUsingAxious from './FetchAPI/PostUsingAxious';
import AddEmployee from './Employee/AddEmployee';
import DisplayEmp from './Employee/DisplayEmp';
import EditEmployee from './Employee/EditEmployee';
import EditUserComponent from './Compnonets/EditUserComponent';
import JsonServerFeth from './FetchAPI/JsonServerFeth'
import Display from './CompanyReg/Display';
import AddCompany from './CompanyReg/AddCompany';
import EditCompany from './CompanyReg/EditCompany';

import 'C:/Users/iluser/Data/FAIZ_WORK/Faiz-React/mp/node_modules/bootstrap/dist/css/bootstrap.css'
import CallBackRef from './PDF4/CallBackRef';
import HOC from './HOC';

function App() {
  return (
    <div>
 <CallBackRef/>
 <ClickCounterUsingHoc/>
     <ErrorBoundary/>

<HOC/>
     </div>
  );
}

export default App;
