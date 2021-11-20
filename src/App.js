import React from 'react'
import Btn from './components/btn'
import Clock from './components/clock'
import InputSection from './components/inp'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      running: false,
      state: 'Session',
      min: '00',
      sec: '00'
    }
  }
  componentDidMount(){
    this.setState({min: this.state.sessionLength})
  }

  breakBtnFunc = (minus = true) => {
    let res = this.state.breakLength
    minus&&res>1 ? res-- : minus ? res=1 : res++
    this.setState({breakLength: res})
  }
  sessionBtnFunc = (minus = true) => {
    let res = this.state.sessionLength
    minus&&res>1 ? res-- : minus ? res=1 : res++
    this.setState({sessionLength: res})
  }

  run = () => {
    this.clock = setInterval(this.runClock, 1000);
  }
  stop = () => {
    clearInterval(this.clock)
  }

  testClockChage = (min, sec, state) => {
    if (!min && !sec && state === 'Session'){
      this.setState({
        min: this.state.breakLength,
        sec: '00',
        state: 'Break'
      })
    }
    if (!min && !sec && state === 'Break'){
      this.setState({
        min: this.state.sessionLength,
        sec: '00',
        state: 'Session'
      })
    } else {
      this.setState({min, sec, state})
    }
  }
  runClock = () => {
    console.log('runing');
    let min = Number(this.state.min)
    let sec = Number(this.state.sec)
    let {state} = this.state
    if (min > 0 || sec > 0){
      sec === 0 ? min-- : sec--
    }
    min < 10 ? min = `0${min}` : min = `${min}`
    sec === 0 ? sec = `59` : sec < 10 ? sec = `0${sec}` : sec = `${sec}`
    
    this.testClockChage(min, sec, state)
  }

  render(){
    return(
      <div>
        <h1>Section + Break Clock</h1>
        <section className={'inputs'}>
          <InputSection downClick={() => (this.breakBtnFunc())} upClick={() => (this.breakBtnFunc(false))} length={this.state.breakLength}/>
          <InputSection downClick={() => (this.sessionBtnFunc())} upClick={() => (this.sessionBtnFunc(false))} length={this.state.sessionLength}/>
        </section>
        <section>
          <Clock clockState={this.state.state} min={this.state.min} sec={this.state.sec}/>
          <Btn onClick={()=>{this.run()}} txt={'▶'}/>
          <Btn onClick={()=>{this.stop()}}txt={'⏸'}/>
          <Btn onClick={()=>{this.restart()}}txt={'🔃'}/>
        </section>
      </div>
    )
  }
}

export default App;
