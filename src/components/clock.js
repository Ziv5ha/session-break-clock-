import React from 'react'
import '../styles/clock.css'

class Clock extends React.Component{
  render(){
    return(
        <div className={'clock'}>
            <h2>{this.props.clockState}</h2>
            <p>{this.props.min}:{this.props.sec}</p>
        </div>
    )
  }
}

export default Clock;
