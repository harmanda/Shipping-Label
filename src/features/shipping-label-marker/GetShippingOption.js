import React, { Component } from 'react';
import { Box, Form, FormField, Text, RadioButtonGroup } from 'grommet';

class GetShippingOption extends Component{

    constructor(props) {
        super(props);
        this.state = {
            wizardContext: props.wizardContext
        }
        this.onShippingOptionChange = this.onShippingOptionChange.bind(this);
    }

    onShippingOptionChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.shippingOption = event.target.value;
        this.setState({ wizardContext:wizardContext });      
        this.props.onDataChange(wizardContext);
    }

    render() {
        if (this.props.currentStep !== 3){
            return null;
        }  
        return (<Box direction = "column" align = "center" justify="center" flex="grow">     
        <Form className="formClass" onChange={this.onChange} >  
        <Box flex="grow">      
        <Text size="medium" weight="bold">Choose Your Shipping Option</Text>
            
        <FormField label="Shipping Option">
            <RadioButtonGroup      
                options={['Ground', 'Priority']}
                value={this.state.wizardContext.shippingOption}
                onChange={this.onShippingOptionChange}
            />
        </FormField>
         
        </Box>  
        </Form>
        </Box>) 
    }
}

export default GetShippingOption;