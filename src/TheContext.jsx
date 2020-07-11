import React, { Component } from 'react';

export const myContext = React.createContext()

class GameClass extends Component {
    constructor(){
        super()
        this.state={
            lightMode:true,
            light:{modeFont:"#FFFFFF", background:"#FFFFFF", buttonColor:"#152238"},
            dark:{modeFont:"#152238", background:"#152238", buttonColor:"#FFFFFF"}
        }
        this.changeMode = this.changeMode.bind(this)
        
    }
    
    
    changeMode = () =>{
        this.setState({
            lightMode:!this.state.lightMode
        })
    }
    render() { 
        return ( 
            <div>
                <myContext.Provider value={{...this.state, changeMode:this.changeMode}}>
                    {this.props.children}
                </myContext.Provider>
            </div>
         );
    }
}
 
export default GameClass;