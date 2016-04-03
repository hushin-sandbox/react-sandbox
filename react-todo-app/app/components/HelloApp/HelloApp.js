import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class HelloApp extends React.Component {
  render() {
    const {mainStore, dispatch} = this.props;

    return (
      <div>
        Hello world!
      </div>
    );
  }
}

export default connect(
  ({ mainStore }) => ({ mainStore })
)(HelloApp);
