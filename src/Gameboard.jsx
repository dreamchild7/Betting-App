import React, { Component } from 'react';
import { myContext } from './TheContext';
import './index.css'




class Gameboard extends Component {
    constructor(){
        super()
        this.state={
            stakes: 8,
            unit:40.02,
            bet_price: 0,
            winning_average:20
        }
        this.handleStake =this.handleStake.bind(this)
        this.handlePrice =this.handlePrice.bind(this)
        this.xxStake =this.xxStake.bind(this)
        this.xxPrice =this.xxPrice.bind(this)
    }
    handleStake(){
        this.setState({
            stakes:this.state.stakes * 4
        })
    }
    handlePrice(){
        this.setState({
            bet_price:this.state.bet_price + this.state.unit
        })
    }
    xxPrice(){
        this.setState({
            bet_price:this.state.bet_price *0
        })
    }
    xxStake(){
        this.setState({
            stakes:this.state.stakes * 0 + 8
        })
    }
    
    
    static contextType= myContext
    render() {
        const  {lightMode, light, dark} =this.context
        const changeTheme = lightMode? light:dark
        return ( 
            <div className="main" style={{backgroundColor:changeTheme.background}}>
                <button className="main-button" style={{color:changeTheme.modeFont, backgroundColor:changeTheme.buttonColor}}>{this.state.stakes}</button>
                <button className="main-button" style={{color:changeTheme.modeFont, backgroundColor:changeTheme.buttonColor}}>{this.state.unit}</button>
                <button className="main-button" style={{color:changeTheme.modeFont, backgroundColor:changeTheme.buttonColor}}>{this.state.bet_price}</button>
                <button className="main-button" style={{color:changeTheme.modeFont, backgroundColor:changeTheme.buttonColor}}>{this.state.winning_average}</button>
                
                <div className="buttonClick">
                    <button style={{color:changeTheme.modeFont, backgroundColor:changeTheme.buttonColor}} onClick={this.handleStake}>+stakes</button>
                    <button style={{color:changeTheme.modeFont, backgroundColor:changeTheme.buttonColor}} onClick={this.handlePrice}>+price</button>
                    <button style={{color:changeTheme.modeFont, backgroundColor:changeTheme.buttonColor}} onClick={this.xxStake}>-stakes</button>
                    <button style={{color:changeTheme.modeFont, backgroundColor:changeTheme.buttonColor}} onClick={this.xxPrice}>-price</button>
                </div>
            </div>
         );
    }
}
 
export default Gameboard;