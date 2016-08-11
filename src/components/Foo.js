import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

export default class Foo extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div>
        Some state changes: { this.props.number }

        <button onClick={ this.props.increase }>Increment</button>
        <button onClick={ this.props.decrease }>Decrement</button>
      </div>
    );
  }
}

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease }
)(Foo)