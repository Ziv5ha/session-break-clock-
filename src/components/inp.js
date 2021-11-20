import React from 'react'
import Btn from './btn'


class InputSection extends React.Component{
  render(){
    return(
      <div className={'inp-div'}>
        <h3 className={'inp-h'}>{this.props.header}</h3>
        <Btn onClick={this.props.downClick} txt={'🔻'}/>
        {this.props.length}
        <Btn onClick={this.props.upClick} txt={'🔺'}/>
      </div>
    )
  }
}

export default InputSection;
