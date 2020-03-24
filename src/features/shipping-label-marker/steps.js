import  GetSenderAddress from './GetSenderAddress';
import  GetReceiverAddress from './GetReceiverAddress';
import  GetWeight from './GetWeight';
import  GetShippingOption from './GetShippingOption';
import  Confirm  from './Confirm';

const steps = 
    [
      {name: 'Step1', component: GetSenderAddress },
            {name: 'Step2', component: GetReceiverAddress},
            {name: 'Step3', component: GetWeight},
            {name: 'Step4', component: GetShippingOption},
            {name: 'Step4', component: Confirm}
    ]

export { steps }