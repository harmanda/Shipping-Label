import React, { Component } from 'react';
import { steps } from './steps';
import { Box } from 'grommet';
import ShippingInfoWizard from '../../core/components/wizard/ShippingInfoWizard';
import ShippingLabel from './ShippingLabel';

class ShippingLabelMaker extends Component{

    constructor(props) {
        super(props);
        this.state = {
            wizardContext: {
                from: {
                    name: '', 
                    street:'' , 
                    city: '',
                    state: '', 
                    zip: ''
                },
                to: {
                    name: '', 
                    street: '', 
                    city: '',
                    state: '',
                    zip: ''
                },
                weight: undefined,
                shippingOption: undefined
                },
            completeFlag:false,
        }
        this.onComplete = this.onComplete.bind(this);
    }

    onComplete(shippingInfo) {       
        this.setState({ wizardContext: shippingInfo , completeFlag: true});      
    }

    render() {
        if(this.state.completeFlag){
            return <ShippingLabel shippingInfo={this.state.wizardContext}/>
        }
        return (<Box flex="grow"><ShippingInfoWizard wizardContext={this.state.wizardContext}
                steps={steps} onComplete = {this.onComplete}
                title = 'Shipping Label Maker'
                /></Box>);
    }
}

export default ShippingLabelMaker;