import React from 'react'
import InputSection from './components/inp'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      running: false,
      state: 'session',
      // clock: {min: this.state.sessionLength, sec: '00'}
    }
  }
  breakBtnFunc = (plus = true) => {
    let res = this.state.breakLength
    plus ? res++ : res-- 
    this.setState({breakLength: res})
  }
  sessionBtnFunc = (plus = true) => {
    let res = this.state.sessionLength
    plus ? res++ : res-- 
    this.setState({sessionLength: res})
  }
  render(){
    return(
      <div>
        <h1>Section + Break Clock</h1>
        <section>
        <InputSection downClick={() => (this.breakBtnFunc(false))} upClick={() => (this.breakBtnFunc())} length={this.state.breakLength}/>
        <InputSection downClick={() => (this.sessionBtnFunc(false))} upClick={() => (this.sessionBtnFunc())} length={this.state.sessionLength}/>
        </section>
      </div>
    )
  }
}

export default App;
