import React, { Component } from 'react';
import { Box } from 'grommet';
import  { Text } from 'grommet';
import { Form } from 'grommet';
import { FormField, TextInput } from 'grommet';

class GetSenderAddress extends Component{

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
        wizardContext.from.name = event.target.value;
        this.setState({ wizardContext:wizardContext });      
        this.props.onDataChange(wizardContext);
    } 
    
    onStreetChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.from.street = event.target.value;
        this.setState({ wizardContext:wizardContext });
        this.props.onDataChange(wizardContext);
    } 

    onCityChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.from.city = event.target.value;
        this.setState({ wizardContext:wizardContext });
        this.props.onDataChange(wizardContext);
    } 

    onStateChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.from.state = event.target.value;
        this.setState({ wizardContext:wizardContext });       
        this.props.onDataChange(wizardContext);
    } 

    onZipChange(event) {
        let wizardContext;        
        wizardContext = this.state.wizardContext;
        wizardContext.from.zip = event.target.value;
        this.setState({ wizardContext:wizardContext });
        this.props.onDataChange(wizardContext);
    } 

    render() {  
        if (this.props.currentStep !== 0){
            return null;
        }      
        return (<Box direction = "column" align = "center" justify="center" flex="grow">     
        <Form className="formClass" >  
        <Box flex="grow">      
        <Text size="medium" weight="bold">Enter the Sender's Address</Text>
        <FormField label="Name">
            <TextInput value={this.state.wizardContext.from.name} onChange={this.onNameChange}/>
        </FormField>
        <FormField label="Street">
            <TextInput value={this.state.wizardContext.from.street} onChange={this.onStreetChange}/>
        </FormField>
        <FormField label="City">
            <TextInput value={this.state.wizardContext.from.city} onChange={this.onCityChange}/>
        </FormField>
        <Box direction="row" justify="between">
        <FormField label="State">
            <TextInput value={this.state.wizardContext.from.state} onChange={this.onStateChange}/>
        </FormField>
        <FormField label="Zip">
            <TextInput value={this.state.wizardContext.from.zip} onChange={this.onZipChange}/>
        </FormField>
        </Box>      
        
        </Box>  
        </Form>
        </Box>)        
    }
}

export default GetSenderAddress;