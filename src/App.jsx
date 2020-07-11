import React, { Component } from 'react';
import Gameboard from './Gameboard';
import GameClass from './TheContext';
import Control from './Control';
import './index.css'




class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Betting App</h1>
                <GameClass>
                    <Gameboard />
                    <Control />
                </GameClass>
            </div>
         );
    }
}
 
export default App;