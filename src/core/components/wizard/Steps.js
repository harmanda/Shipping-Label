import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'grommet';


const propTypes = {
    wizardContext: PropTypes.object.isRequired, 
    onAction: PropTypes.func.isRequired
    };

const defaultProps = {
    wizardContext: {},
    onAction: ()=> {}
}


class Steps extends Component{

    constructor(props) {
        super(props);
        this.state = {
            wizardContext: props.wizardContext,          
        }
        this.onDataChange = this.onDataChange.bind(this);
    }  

    onDataChange(newWizardContext) {
        this.setState({ wizardContext: newWizardContext });
    }

    createSteps = () => { 
        const steps = this.props.steps;
        let elementsArray =[];
        let Component;       
        
        for(let i=0;i<steps.length;i = i+1) {           
            Component = steps[i].component;
            elementsArray.push(<Component onDataChange={this.onDataChange} wizardContext={this.state.wizardContext} 
                currentStep={this.props.currentStep}/>)
        }
        return  elementsArray;
      }

    render() {            
        return (  
            <Box>                  
            {this.createSteps()}     
            <Box direction="row" align="center" justify="center">
                {this.props.currentStep === 0 ? null : (<Box pad="small">
                    <Button label="Prev" onClick={this.props.onAction.bind(this,1,this.state.wizardContext)}/></Box>
                )}

                {this.props.currentStep === this.props.steps.length - 1 ? null : <Box pad={"small"}>
                    <Button label="Next" onClick={this.props.onAction.bind(this,2,this.state.wizardContext)}/></Box>
                }

                {this.props.currentStep === this.props.steps.length - 1 ? <Box pad={"small"}>
                    <Button label="Done" onClick={this.props.onAction.bind(this,3,this.state.wizardContext)}/></Box> : null
                }
            </Box>
            </Box>);
       
    }
}
Steps.propTypes = propTypes;
Steps.defaultProps = defaultProps;
export default Steps;