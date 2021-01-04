import React, { useState } from 'react';
import PropsType from 'prop-types';

const Children = (props) => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h2 style={{ color: 'white' }}>
                Children Component
                </h2>
            <h3>
                {props.name}
            </h3>
            <h4>
                {props.email}
            </h4>
            <h5>
                {props.age}
            </h5>
            <button type='submit' onClick={() => setCount(++count)}>Increase</button>
            <h3>{count}</h3>
        </div>

    );


}
//Defaul Props
Children.defaultProps = {
    name: "umair",
    email: "umairsharafat@gmail.com",
    age: 19
}
Children.PropsType = {
    name: PropsType.string.isRequired,
    email: PropsType.string.isRequired,
    age: PropsType.number.isRequired
}

export default Children;