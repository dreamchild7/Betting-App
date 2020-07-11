import React, { Component } from 'react';
import {myContext} from './TheContext'
import './index.css'


class Control extends Component {
    static contextType = myContext
    render() {
        const {changeMode} = this.context 

        return ( 
            <div className="main-control">
                 <button className="switchMode" onClick={changeMode}>Switch Mode</button>
            </div>
           
         );
    }
}
 
export default Control;