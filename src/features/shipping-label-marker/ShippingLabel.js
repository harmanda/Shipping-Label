import React from 'react';
import { Box, Text, Heading } from 'grommet';

function ShippingLabel(props) {
    const {
        shippingInfo
      
    } = props;  
     
    return ( 
      <Box flex="grow" align="center" justify="center">       
      <Heading size="small">Shipping Label</Heading>
      
      <Box direction="row" pad="medium" >
      <Box pad={{ horizontal: 'medium' }} direction="column">
        <Text>{shippingInfo.from.name}</Text>
        <Text>{shippingInfo.from.street}</Text>
        <Text>{shippingInfo.from.city}</Text>
        <Text>{shippingInfo.from.state}</Text>
        <Text>{shippingInfo.from.zip}</Text>
      </Box>
      <Box pad={{ horizontal: 'medium' }} >
      <Text size="medium" weight="bold">{shippingInfo.weight} LBS</Text>
      </Box>
      <Box pad={{ horizontal: 'medium' }} >
      <Text>{shippingInfo.shippingOption}</Text>
      </Box>
      </Box>
    

     <Box direction="row" pad="medium" >
        <Text size="medium" weight="bold">Ship To:</Text>
        <Box pad={{ horizontal: 'medium' }} direction="column">
        <Text size="medium" weight="bold">{shippingInfo.to.name}</Text>
        <Text size="medium" weight="bold">{shippingInfo.to.street}</Text>
        <Text size="medium" weight="bold">{shippingInfo.to.city}</Text>
        <Text size="medium" weight="bold">{shippingInfo.to.state}</Text>
        <Text size="medium" weight="bold">{shippingInfo.to.zip}</Text>
        </Box>
      </Box>

     </Box>
    );
  }
  
  
  export default ShippingLabel;