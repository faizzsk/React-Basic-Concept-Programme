import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from './Calculator';
import List from './List'
//import AddUser from './AddUser';
import Formma from './formma'
import DisplayInTable from './DisplayInTable'
import LocalStorageDemo from './LocalStorageDemo'
import AddUser from './Compnonets/AddUser'
import EditUserComponent from './Compnonets/EditUserComponent'
import DisplayData from './Compnonets/DisplayData'
import CurrentTime from './Assignment/CurrentTime';
import Toggle from './Assignment/Toggle';
import ListRendering from './Assignment/ListRendering';
import DoubleArrayValue from './Assignment/DoubleArrayValue';
import Book from './PDF4/RenderProps'
import CountApp from './PDF5/CountApp';
import SimpleHooks from './PDF5/SimpleHooks';
import HooksIncrementDevrement from './PDF5/HooksIncrementDevrement';
import UseEffectDemo from './PDF5/UseEffect'
import Greeting from './PDF5/Greeting';
ReactDOM.render(
  <React.StrictMode>
    {/* <Calculator/>
    <List/> */}
    {/* <List/>
    <AddUser/> */}
    {/* <LocalStorageDemo/> */}
    {/* <App/> */}
     {/* <AddUser/>
     <DisplayData/>
     <EditUserComponent/>
         <DisplayInTable/> */}

     {/* <EditUserComponent/>  */}
      <App/>
     
     
      {/* <Book title={(isAfricanAuthor) => isAfricanAuthor ? 'Purple Hibiscus' : 'More Myself'}/> */}
    {/* <CountApp/> */}
 {/* <SimpleHooks/>
<HooksIncrementDevrement/>
<UseEffectDemo/>
<Greeting/>  */}
     {/* <CurrentTime/>
     <Toggle/>
     <ListRendering/>
     <DoubleArrayValue/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
