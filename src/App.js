import React, { Component } from 'react';
import { Box, Grommet } from 'grommet';
import ShippingLabelMaker from './features/shipping-label-marker/ShippingLabelMaker'

class App extends Component {
  render() {
    return (
      <Grommet plain>
        <Box direction = 'row' align='center' justify='between'>
         <ShippingLabelMaker />
        </Box>
      </Grommet>
    );
  }
}

export default App;
