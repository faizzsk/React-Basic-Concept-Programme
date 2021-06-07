import react from react

import  Calculator from  './Calculator'
import  AddUser    from  './AddUser'

ReactDOM.render(
    <React.StrictMode>
      <Calculator/>
      <AddUser/>
    </React.StrictMode>,
    document.getElementById('root')
  );