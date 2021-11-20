import React from 'react'
import Btn from './btn'
import {Up, Down} from './icons'
import '../styles/inp.css'


class InputSection extends React.Component{
  render(){
    return(
      <div>
        <h3>{this.props.header}</h3>
        <div className={'inp-div'}>
          <Btn onClick={this.props.downClick} txt={Up()}/>
          {this.props.length}
          <Btn onClick={this.props.upClick} txt={Down()}/>
        </div>
      </div>
    )
  }
}

export default InputSection;
