import './App.css';


import Test from './components/Test';
import Hello from './components/Hello';

import Lists from './components/Lists';

import LifeCycleExample from './components/LifeCycleExample';


import Conditions from './components/Conditions';

import Age from './components/Age';
import Users from './components/Users';



function App() {
    
    const age = 25;

    let users = [
        {id: 9, name: "Abdallah", age: 23},
        {id: 1, name: "Mahmoud", age: 30},
        {id: 2, name: "Hassan", age: 12}
    ];
    let guests = [
        {id: 50, name: "Islam", age: 3},
        {id: 51, name: "Adel", age: 90},
        {id: 53, name: "Barra", age: 23}
    ];
    
  return (
    <div className="App">
      Welcome
      <Test name='Abdallah' lname="Mahmoud">Brief Description Here.</Test>
      <Test name='Ahmed' lname="Mohamed">Brief Description Here.</Test>
      <Hello name="Abdallah from Class"  />
      <Lists  />
      <Conditions  />
      <LifeCycleExample  />
      
      <Age age={age} />
      <Age age={23} />
      
      <hr />
      <Users users={users} />
      
      <Users users={guests} />

    </div>
  );
}

export default App;
