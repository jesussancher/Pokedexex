import React, {useState} from 'react';  
import Loading from './components/loading';
import Login from './components/login'
import Pokedex from './components/pokedex'
import './App.css';
import './styles.css';


function App(){
  const [user, setUser] = useState("")
  const [showLoading, setShowLoading] = useState(true)
  const [showComp, setShowComp] = useState('login')
  // const [showCompState, setShowCompState] = useState(true)
  
  const show = (comp) =>{
    setShowLoading(comp)
  }

  const showComponent = (comp) =>{
    setShowComp(comp)
  }

  const userName = (name) =>{
    setUser(name)
  }

  if (showLoading === true){
    return (
      <div className="App">
        <Loading show={show}/>
      </div>
    );
  } else {
    switch (showComp) {
      case 'login':
          return (
            <div className="App">
                <Login user={userName} show={show} showComp={showComponent}/>
            </div>
          )
      break;
      
      case 'pokedex':
          return (
            <div className="App">
              <Pokedex masterName={user}/>
            </div>
          )
      break;

      default:
        break;
    }
    
  }
  
}

export default App;