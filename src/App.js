

import "./App.css";
import Add from "./Components/Add";
import List from "./Components/List";


function App() {
 
  

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App </h2>
        <Add/>
        <List/>
        
        
      </header>
    </div>
  );
}

export default App;
