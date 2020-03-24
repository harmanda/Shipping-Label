import React, { Component } from 'react';
import { Box, Form, FormField, Text, TextInput } from 'grommet';

class GetWeight extends Component{

    constructor(props) {
        super(props);
        this.state = {
            wizardContext: props.wizardContext
        }
        this.onWeightChange = this.onWeightChange.bind(this); 
    }

    onWeightChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.weight = event.target.value;
        this.setState({ wizardContext:wizardContext });      
        this.props.onDataChange(wizardContext);
    }

    render() {
        if (this.props.currentStep !== 2){
            return null;
        }  
        return (<Box direction = "column" align = "center" justify="center" flex="grow">     
        <Form className="formClass">  
        <Box flex="grow">      
        <Text size="medium" weight="bold">Enter the Weight in lbs</Text>         
        <FormField label="Weight">
            <TextInput value={this.state.wizardContext.weight} onChange={this.onWeightChange}/>
        </FormField>      
        </Box>  
        </Form>
        </Box>)     
        
    }
}

export default GetWeight;