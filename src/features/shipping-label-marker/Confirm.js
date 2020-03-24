import React, { Component } from 'react';
import { Box, Form, Text } from 'grommet';

class Confirm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            wizardContext: props.wizardContext
        }
    }

   
    render() {
        if (this.props.currentStep !== 4){
            return null;
        } 
        const wizardContext = this.state.wizardContext; 
        return (<Box direction = "column" align = "center" justify="center" flex="grow">     
        <Form className="formClass">  
        <Box flex="grow">      
        <Text size="medium" weight="bold">Please confirm your order</Text>
        <Box direction="row" pad="medium" >
        <Text>Shipping Address:</Text>
        <Box pad={{ horizontal: 'medium' }} direction="column">
        <Text>{wizardContext.to.name}</Text>
        <Text>{wizardContext.to.street}</Text>
        <Text>{wizardContext.to.city}</Text>
        <Text>{wizardContext.to.state}</Text>
        <Text>{wizardContext.to.zip}</Text>
        </Box>
        </Box>
        <Box direction="row" pad="medium" >
        <Text>Shipping cost(CAD):</Text>
        <Box pad={{ horizontal: 'small' }}>
        <Text>${Math.round( (wizardContext.weight * 0.40 *
            (wizardContext.shippingOption === 'Ground' ? 1 : 1.5)) * 100 ) / 100  }</Text>
        </Box> 
        </Box>
        </Box>  
        </Form>
        </Box>) 
        
    }
}

export default Confirm;