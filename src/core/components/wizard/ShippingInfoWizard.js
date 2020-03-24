import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading} from 'grommet';
import Steps from './Steps';

const propTypes = {
    title: PropTypes.string.isRequired, 
    steps: PropTypes.array.isRequired,
    wizardContext: PropTypes.object.isRequired, 
    onComplete: PropTypes.func.isRequired
};

const defaultProps = {
    title: '',
    steps: [],
    wizardContext: {},
    onComplete: ()=>{}    
}

class ShippingInfoWizard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            wizardContext:props.wizardContext, 
            currentStep:0};
        this.onAction = this.onAction.bind(this);
    }

    onAction(actionType,wizardContext){
        const stepsLength = this.props.steps.length;
        const currentStep = this.state.currentStep;
        let step;
        if(actionType === 1) {
            if(currentStep !== 0 ){
                step = currentStep-1;
                this.setState({currentStep: step, wizardContext:wizardContext});
            }            
        } else if (actionType === 2){
            if(currentStep !== (stepsLength-1) ){
                step = currentStep+1;
                this.setState({currentStep: step, wizardContext:wizardContext});
            } 
        } else if (actionType === 3){
            step = stepsLength-1;
            this.setState({currentStep: step, wizardContext:wizardContext});
            this.props.onComplete(this.state.wizardContext);
        }
        
    }  

    render() {
        const title = this.props.title;   
        const currentStep = this.state.currentStep;
        const stepsLength = this.props.steps.length;
        const progressPercentage = ((currentStep+1)/stepsLength)*100;
        return (<Box direction="column" pad ="small">
                    <Box flex="grow" align="center" justify="center">
                    <Heading size="small">{title}</Heading>
                    </Box>
                    <Box flex="grow" pad="small" align="center" justify="center">
                    <Box id="progressBarContainer" >
                    <Box id="progressBar" width={`${progressPercentage}%`}></Box>
                    </Box>
                    </Box>
                    <Steps wizardContext={this.state.wizardContext} steps={this.props.steps} currentStep={currentStep}
                        onAction={this.onAction}/>                    
                </Box>);
       
    }
}
ShippingInfoWizard.propTypes = propTypes;
ShippingInfoWizard.defaultProps = defaultProps;
export default ShippingInfoWizard;