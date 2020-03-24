import React, { Component } from 'react';
import { Box, Form, FormField, Text, TextInput } from 'grommet';

class GetReceiverAddress extends Component{
    constructor(props) {
        super(props);
        this.state = {
            wizardContext: props.wizardContext
        }
        this.onNameChange = this.onNameChange.bind(this); 
        this.onStreetChange = this.onStreetChange.bind(this); 
        this.onCityChange = this.onCityChange.bind(this); 
        this.onStateChange = this.onStateChange.bind(this); 
        this.onZipChange = this.onZipChange.bind(this);          
    }

    onNameChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.to.name = event.target.value;
        this.setState({ wizardContext:wizardContext });      
        this.props.onDataChange(wizardContext);
    } 
    
    onStreetChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.to.street = event.target.value;
        this.setState({ wizardContext:wizardContext });
        this.props.onDataChange(wizardContext);
    } 

    onCityChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.to.city = event.target.value;
        this.setState({ wizardContext:wizardContext });
        this.props.onDataChange(wizardContext);
    } 

    onStateChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.to.state = event.target.value;
        this.setState({ wizardContext:wizardContext });       
        this.props.onDataChange(wizardContext);
    } 

    onZipChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.to.zip = event.target.value;
        this.setState({ wizardContext:wizardContext });
        this.props.onDataChange(wizardContext);
    } 

    render() {         
        if (this.props.currentStep !== 1){
            return null;
        }        
        return (<Box direction = "column" align = "center" justify="center" flex="grow">     
        <Form className="formClass">  
        <Box flex="grow">      
        <Text size="medium" weight="bold">Enter the Receiver's Address</Text>
        <FormField label="Name">
            <TextInput value={this.state.wizardContext.to.name} onChange={this.onNameChange}/>
        </FormField>
        <FormField label="Street">
            <TextInput value={this.state.wizardContext.to.street} onChange={this.onStreetChange}/>
        </FormField>
        <FormField label="City">
            <TextInput value={this.state.wizardContext.to.city} onChange={this.onCityChange}/>
        </FormField>
        <Box direction="row" justify="between">
        <FormField label="State">
            <TextInput value={this.state.wizardContext.to.state} onChange={this.onStateChange}/>
        </FormField>
        <FormField label="Zip">
            <TextInput value={this.state.wizardContext.to.zip} onChange={this.onZipChange}/>
        </FormField>
        </Box>      
        </Box>  
        </Form>
        </Box>)        
    }
}

export default GetReceiverAddress;