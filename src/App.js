import React from 'react'
import Btn from './components/btn'
import Clock from './components/clock'
import InputSection from './components/inp'
import {Play, Pause, Restart} from './components/icons'
import './styles/app.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.running = false
    this.state = {
      breakLength: 1,
      sessionLength: 1,
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
    if (!this.running){
      if (this.state.state === 'Break'){
        this.setState({breakLength: res, min: `${res}`})
      } else {
        this.setState({breakLength: res})
      }
    }
  }
  sessionBtnFunc = (minus = true) => {
    let res = this.state.sessionLength
    minus&&res>1 ? res-- : minus ? res=1 : res++
    if (!this.running){
      if (this.state.state === 'Session'){
        this.setState({sessionLength: res, min: `${res}`})
      } else {
        this.setState({sessionLength: res})
      }
    } 
  }

  run = () => {
    this.running = true
    this.clock = setInterval(this.runClock, 1000);
  }
  stop = () => {
    clearInterval(this.clock)
  }

  testClockChage = (state) => {
    if (state === 'Session'){
      this.setState({
        min: this.state.breakLength,
        sec: '00',
        state: 'Break'
      })
    }
    if (state === 'Break'){
      this.setState({
        min: this.state.sessionLength,
        sec: '00',
        state: 'Session'
      })
    }
  }
  runClock = () => {
    let min = Number(this.state.min)
    let sec = Number(this.state.sec)
    if (sec === 0) min--
    sec--
    if (min < 0 && sec < 0){
      this.testClockChage(this.state.state)
    } else {
      min < 10 ? min = `0${min}` : min = `${min}`
      sec < 0 ? sec = `59` : sec < 10 ? sec = `0${sec}` : sec = `${sec}`
      this.setState({min, sec})
    }
  }
  
  restart = () => {
    let res = this.state.breakLength
    this.running = false
    this.stop()
    this.setState({state: 'Session', min: `${res}`, sec:'00'})
  }

  render(){
    return(
      <div className={'app'}>
        <h1>Section + Break Clock</h1>
        <section className={'inputs'}>
          <InputSection 
            downClick={() => (this.breakBtnFunc())} 
            upClick={() => (this.breakBtnFunc(false))} 
            length={this.state.breakLength} 
            header={'Break Length'}
          />
          <InputSection
            downClick={() => (this.sessionBtnFunc())} 
            upClick={() => (this.sessionBtnFunc(false))} 
            length={this.state.sessionLength} 
            header={'Session Length'}
          />
        </section>
        <section>
          <Clock clockState={this.state.state} min={this.state.min} sec={this.state.sec}/>
          <div className={'ppr'}>
            <Btn onClick={this.run} txt={Play()}/>
            <Btn onClick={this.stop} txt={Pause()}/>
            <Btn onClick={this.restart} txt={Restart()} className={'restart-btn'}/>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
