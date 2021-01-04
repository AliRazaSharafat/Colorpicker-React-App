import React, { Component } from 'react';
import PropsType from 'prop-types';

class ColorPicker extends Component{
    static PropsType={
        list:PropsType.array.isRequired
    }
    render(){
        return(
            <div className='row'>
                {this.props.list.map(color=>(
                    <div className='col' key={color} style={{backgroundColor:color}}>
                        {color}
                    </div>
                ))}
            </div>
        );
    }
}

export default ColorPicker;