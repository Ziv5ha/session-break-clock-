import React from 'react'
import '../styles/btn.css'

class Btn extends React.Component{
  render(){
    return(
      <button onClick={this.props.onClick} className={this.props.className}>{this.props.txt}</button>
    )
  }
}

export default Btn;
